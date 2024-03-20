import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { IconLike } from "../../Elements/Icons/Like";
import { Button } from "@mui/material";

export default function OutlinedCard({ data, large }) {
  const [isActive, setIsActive] = React.useState(false);
  
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <img
              srcSet={`${data.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${data.image}?w=248&fit=crop&auto=format`}
              alt="character"
              loading="lazy"
            />
            {!large && (
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {data.species}
              </Typography>
            )}

            {large && (
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {data.status} | {data.species} | {data.gender}
              </Typography>
            )}
            {data.name && <Typography variant="h4">{data.name}</Typography>}

            {large && (
              <Typography variant="h5" sx={{ mb: 1 }} color="text.secondary">
                {data.origin && data.origin.name}
              </Typography>
            )}
          </CardContent>
          <CardActions>
            {!large && (
              <Link to={`character/${data.id}`} size="small">
                Learn More
              </Link>
            )}
            {large && (
              <Button onClick={() => setIsActive(!isActive)}>
                <IconLike isActive={isActive} />
              </Button>
            )}
          </CardActions>
        </React.Fragment>
      </Card>
    </Box>
  );
}
