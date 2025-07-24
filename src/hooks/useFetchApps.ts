import { useEffect, useState } from "react";
import { getApps, type GetAppsResponse } from "../services/api";

export const useFetchApps = (filters: {appName?: string, category?: string}, page: number, size: 25 | 50) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<GetAppsResponse>({appRows: [], totalCount: 0});

    
    useEffect(() => {
        setLoading(true);
        getApps({
            appName: filters.appName,
            category: filters.category,
            pageNumber: page,
            pageSize: size
        }).then(setData)
        .finally(()=> setLoading(false));
    }, [filters.appName, filters.category, page, size]);

    return {data, loading}
}