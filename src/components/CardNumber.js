import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function CardNumber({ metricNumber, metricDescription }) {
  return (
    <Card
      sx={{ bgcolor: "secondary.main", color: "text.primary", width: "20rem" }}
    >
      <CardContent sx={{ marginBottom: "-1em" }}>
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          {metricDescription}
        </Typography>

        <Typography
          sx={{ fontSize: 40, fontWeight: "bold", textAlign: "center" }}
        >
          {metricNumber}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CardNumber;
