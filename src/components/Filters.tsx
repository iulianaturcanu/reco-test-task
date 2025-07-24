import { Stack, TextField, Typography } from "@mui/material"

interface FiltersProps {
    appName: string;
    category: string;
    onCategoryChange: (value: string) => void;
    onAppNameChange: (value: string) => void;
}
export const Filters = ({appName, category, onCategoryChange, onAppNameChange}: FiltersProps) => {
    return (
        <Stack direction={{ xs: 'column', sm: 'column'}} spacing={2}>
            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>Filters</Typography>
            <TextField label="Name Filter" value={appName} onChange={(e: React.ChangeEvent<HTMLInputElement>)=> onAppNameChange(e.target.value)} size="small" />
            <TextField label="Category Filter" value={category} onChange={(e: React.ChangeEvent<HTMLInputElement>)=> onCategoryChange(e.target.value)} size="small" />
        </Stack>
    )
}