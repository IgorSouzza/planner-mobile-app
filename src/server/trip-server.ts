import { api } from './api'

export type TripDetails = {
  id: string
  destination: string
  starts_at: string
  ends_at: string
  is_confirmed: boolean
}

type TripCreate = Omit<TripDetails, 'id' | 'is_confirmed'> & {
  emails_to_invite: string[]
}

async function getById(id: string) {
  const { data } = await api.get<{ trip: TripDetails }>(`/trips/${id}`)
  return data.trip
}

async function create({
  destination,
  emails_to_invite,
  ends_at,
  starts_at,
}: TripCreate) {
  const { data } = await api.post<{ tripId: string }>('/trips', {
    destination,
    emails_to_invite,
    ends_at,
    starts_at,
    owner_name: 'Igor Souza',
    owner_email: 'igor.souza.webmaster@gmail.com',
  })

  return data.tripId
}

export const tripServer = { getById, create }
