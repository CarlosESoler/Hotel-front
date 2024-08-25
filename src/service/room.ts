export interface IRoom {
    id: number,
    number: number,
    description: string,
    status: IRoomStatus,

}

export interface IRoomStatus {
    status: string
}

export interface IRoomType {
    type: string
}