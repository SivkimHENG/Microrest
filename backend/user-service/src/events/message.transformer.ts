

export function transformAuthEvent(raw: any) {


  const baseTransform = {
    eventId: raw.event_id,
    timestamp: raw.occurred_at,
  }


  switch (raw.type) {
    case "UserRegistered":
      return {
        ...baseTransform, payload: {
          userId: raw.user_id,
          userUuid: raw.user_uuid,
          username: raw.username,
          eventId: raw.event_id,
          email: raw.email,
          roles: Array.isArray(raw.role) ? raw.role : [raw.role || "CUSTOMER"]
        }

      };


  }

}

