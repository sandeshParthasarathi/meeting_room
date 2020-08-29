export interface room_details {
    room_name: string,
    room_location: string,
    room_capacity: number,
    room_status: string,
    booking_details: any[]
}

export interface Booking_details{
    user_name: string,
    booking_date: string,
    booking_duration: string,
    agenda: string,
    room_name: string
}