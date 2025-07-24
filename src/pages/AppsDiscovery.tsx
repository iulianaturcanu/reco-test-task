import { useState } from "react";
import { Filters } from "../components/Filters";
import { AppTable } from "../components/AppTable";
import { useFetchApps } from "../hooks/useFetchApps";
import useDebounce from "../hooks/useDebounce";
import { Box, CircularProgress, Paper } from "@mui/material";

export const AppDiscovery = () => {
    const [appName, setAppName] = useState('');
    const [category, setCategory] = useState('');

    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState<25 | 50>(25);

    const debouncedAppName = useDebounce(appName);
    const debouncedCategory = useDebounce(category);

    const {data, loading} = useFetchApps({appName: debouncedAppName, category: debouncedCategory}, page, pageSize)

    console.log(data)
    if (loading) return null;

    return (
        <Box display='flex' gap='4'>
            <Box flex={3}>
            {loading? (
                <Box display='flex' justifyContent='center' mt='4'>
                    <CircularProgress/>
                </Box>
                ) : 
                <AppTable data={data?.appRows} totalCount={data?.totalCount} currentPage={page} pageSize={pageSize} onPageChange={setPage} />
            }
            </Box>
            <Box 
                component={Paper} 
                elevation={2}
                flex={1}
                sx={{
                    minWidth: '240px',
                    p: 2, 
                    ml: 4
                }} >
                <Filters 
                    appName={appName} 
                    category={category} 
                    onAppNameChange={val => {
                        setPage(1);
                        setAppName(val);
                    }} onCategoryChange={val => {
                        setPage(1);
                        setCategory(val);
                    }}
                />
            </Box>
        </ Box>
    )
}