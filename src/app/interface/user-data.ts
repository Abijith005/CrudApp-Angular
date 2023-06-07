
export interface UserData {
    name?: string;
    email?: string;
    password?: string
    profilePic?: image
}

export interface image {
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    destination: string;
    filename: string;
    path: string;
    size: number
}

export interface signUpRes {
    access_token?: string;
    message?: string;
    name?: string,
    email?: string,
    profilePic?: image
}

export interface adminDetails {
    email: string,
    password: string
}

export interface userData {
    _id: string,
    name: string,
    email: string,
    password: string
}
export interface adminResp {
    access_token?: string,
    message?: string,
    users?: [userData]
}

