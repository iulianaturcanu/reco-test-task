import { Box, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import type { AppRow } from "../services/api"

interface AppTableProps {
    data: AppRow[]
    totalCount: number;
    currentPage: number;
    pageSize: number;
    onPageChange: (newPage: number) => void;
}
export const AppTable = ({data, totalCount, currentPage, pageSize, onPageChange}: AppTableProps) => {

    if (!data.length) {
        return (<Typography>
            No application found.
        </Typography>)
    }

    const totalPages = Math.ceil(totalCount/pageSize);

    return (
        <TableContainer component={Paper} elevation={2}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <strong>App Name</strong>
                        </TableCell>
                        <TableCell>
                            <strong>App Owner</strong>
                        </TableCell>
                        <TableCell>
                            <strong>Category</strong>
                        </TableCell>
                        <TableCell>
                            <strong>Sources</strong>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((app) => (
                        <TableRow key={app.appId}>
                            <TableCell>{app.appName}</TableCell>
                            <TableCell>{app.appOwner}</TableCell>
                            <TableCell>{app.category}</TableCell>
                            <TableCell>{app.appSources}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            {totalPages > 1 && (
                <Box display="flex">
                    <Pagination count={totalPages}
                    page={currentPage}
                    onChange={(_, newPage)=> onPageChange(newPage)} color="primary"/>
                </Box>
            )}
        </TableContainer>
    )
}