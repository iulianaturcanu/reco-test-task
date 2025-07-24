import axios from "axios";

interface GetAppsRequest {
    appName?: string;
    category?: string;
    pageNumber: number;
    pageSize: 25 | 50;
}

export interface AppRow {
    appId: string;
    appName: string;
    appOwner: string;
    appSources: string[];
    category: string;
}

export interface GetAppsResponse {
    appRows: AppRow[];
    totalCount: number;
}

const api = axios.create({
    baseURL: 'https://5039e61d11f9.ngrok-free.app/api/v1/app-service',
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000,
})

export const getApps = async (params: GetAppsRequest): Promise<GetAppsResponse> => {
    const {appName= '', category ='', pageNumber, pageSize} = params;

    const requestBody: Partial<GetAppsRequest> = {
        appName: appName.trim(), category: category.trim(), pageNumber, pageSize
    }

    const response = await api.put('/get-apps', requestBody);
    return response.data;
}