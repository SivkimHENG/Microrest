

export function transformAuthEvent(raw: any) {


  const baseTransform = {
    eventId: raw.event_id,
    timestamp: raw.occurred_at,
  }


  switch (raw.type) {
    case "UserRegistered":
      return {
        ...baseTransform,
        payload: {
          userId: raw.user_id,
          userUuid: raw.user_uuid,
          username: raw.username,
          eventId: raw.event_id,
          email: raw.email,
          roles: Array.isArray(raw.role) ? raw.role : [raw.role || "CUSTOMER"]
        }
      };



    case "UserAuthenticate":
      return {
        ...baseTransform,
        payload: {

          eventId: raw.event_id,
          userId: raw.user_id,
          userUuid: raw.user_uuid,
          email: raw.email,
          roles: Array.isArray(raw.role) ? raw.role : [raw.role || "CUSTOMER"],
          lastLoginAt: raw.last_login_at ? new Date(raw.last_login_at) : new Date(),
          lastLoginIp: raw.last_login_ip || raw.ip_address || '',
          loginCount: raw.login_count || 1,
          userAgent: raw.user_agent || '',
          ipAddress: raw.ip_address || raw.last_login_ip || ''
        }


      }

    default:
      console.log(`Unknown event type: ${raw.type}`)
      return null;
  }

}

