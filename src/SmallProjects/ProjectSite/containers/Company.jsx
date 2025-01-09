import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const Company = () => {
  const columns = [
    { id: "id", name: "Id" },
    { id: "name", name: "Name" },
    { id: "email", name: "Email" },
    { id: "phone", name: "Phone" },
    { id: "address", name: "Address" },
    { id: "type", name: "Company Type" },
    { id: "action", name: "Action" },
  ];
  return (
    <>
      <Paper sx={{ margin: "1%" }}>
        <Button style={{ margin: "1%" }} variant="contained">
          Add new(+)
        </Button>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow style={{ backgroundColor: "midnightblue" }}>
                {columns.map((coloumn) => (
                  <TableCell style={{ color: "white" }} key={coloumn.id}>
                    {coloumn.name}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody></TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};
export default Company;
