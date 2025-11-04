# User Management service

The user management service handles all user-related data operations and admin
function, seperate from authentication mechaism.

**User Profile Management**

- Create, read, update user profiles with personal information 
(name, bio, profile picture, contact details)
- Manage user preferences and settings
- Handle user addresses and contact information

**User Administration**

- List all users with pagination and filtering
- Search users by various criteria (email, name, role)
- Update user status (active, inactive, suspended)
- Soft delete or hard delete user accounts
- Bulk user operations for administrators

**User Data Management**

- Manage user-specific data that doesn't belong in authentication service
- Track user activity and audit logs
- Handle user analytics and insights
- Export user data in various formats (CSV, PDF)



## API DESIGN

**Design RESTFUL endpoints focused on user data operations**



```
GET    /api/customers/me              - Get current customer profile (from JWT)
PUT    /api/customers/me              - Update own profile
GET    /api/customers/{id}            - Get customer by ID (admin only)
GET    /api/customers/me/addresses    - Get delivery addresses
POST   /api/customers/me/addresses    - Add new address
PUT    /api/customers/me/addresses/{id} - Update address
DELETE /api/customers/me/addresses/{id} - Delete address
GET    /api/customers/me/favorites    - Get favorite menu items
POST   /api/customers/me/favorites    - Add favorite item
DELETE /api/customers/me/favorites/{id} - Remove favorite
GET    /api/customers/me/loyalty      - Get loyalty points and history


GET    /api/customers                 - List all customers (admin only)
GET    /api/customers?search={query}  - Search customers
PATCH  /api/customers/{id}/status     - Activate/deactivate customer
PUT    /api/customers/{id}/loyalty    - Update loyalty points (admin)
GET    /api/customers/{id}/order-stats - Get customer ordering statistics
GET    /api/customers/analytics       - Get customer analytics dashboard



GET    /api/admins/me                 - Get current admin profile
PUT    /api/admins/{id}               - Update admin profile
GET    /api/admins                    - List all admins (super admin)


```


## Database Customer Design

```

enum Status {
  ACTIVE
  INACTIVE

}

model UserProfiles {

  id  Int @id @default(autoincrement())
  user_id Int @unique @map("user_id")
  user_uuid String  @db.Uuid @map("user_uuid")

  username String @db.VarChar(30)
  email String  @db.VarChar(50)
  role String    @db.VarChar(50)
  profile_url String? @db.Text
  bio String? @db.VarChar(255)
  phone_number String? @db.VarChar(20)


  status Status[]

  customer_perferences CustomerPerference[]
  customer_favorite CustomerFavorite[]
  user_log UserActivityLog[]


  created_at DateTime @default(now()) 
  updated_at DateTime @updatedAt

  @@map("user_profiles")

}


model CustomerProfiles {
  id Int @id @default(autoincrement())
  user_id Int @map("user_id")
  customer_since DateTime @default(now())
  loyalty_points Int @default(0) 


  created_at DateTime @default(now())
  updated_at DateTime @updatedAt
}


model CustomerFavorite {
  id Int @id @default(autoincrement())
  user_id Int @map("user_id")
  menu_item_id Int @unique

  timesOrdered Int @default(0)
  lastOrderedAt DateTime?


  userProfile UserProfiles @relation(fields: [user_id], references: [user_id], onDelete: Cascade)



  created_at DateTime @default(now())
  updated_at DateTime @updatedAt
}

model CustomerAddress {
  id Int @id @default(autoincrement())
  address_line1 String? @db.VarChar(255)
  address_line2 String? @db.VarChar(255)
  city String @db.VarChar(100)
  khan String @db.VarChar(100)
 
  created_at DateTime @default(now())
  updated_at DateTime @updatedAt

}

model CustomerPerference {
  id Int @id @default(autoincrement())
  user_id Int @unique 
  push_notification Boolean @default(true)

  created_at DateTime @default(now())
  updated_at DateTime @updatedAt

  userProfile UserProfiles @relation(fields: [user_id], references: [user_id], onDelete: Cascade )


}






model UserActivityLog {
  id Int @id @default(autoincrement())
  user_id Int @unique 
  user_uuid String @unique @db.Uuid
  action String @db.VarChar(100)
  success Boolean
  message String @db.VarChar(50)

  ip_address String? @db.Inet
  user_agent String? @db.Text


  created_at DateTime @default(now())

  userProfile UserProfiles @relation(fields: [user_id], references: [user_id], onDelete: Cascade)

}

```



## Middleware 

- auth
- authorization
- audit (eg tracking, history)








