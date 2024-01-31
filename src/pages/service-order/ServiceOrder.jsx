import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const ServiceOrder = () => {
  const content = [
    {
      title: "Equipment",
      words: "You can choose the Smart Hands order that you need",
      picture: "/image/services/equipment.png",
      path: "equipment",
    },
    {
      title: "Patch Cable",
      words: "You can choose the Smart Hands order that you need",
      picture: "/image/services/patch-cable.png",
      path: "patch-cable",
    },
    {
      title: "Request Documentation",
      words: "You can choose the Smart Hands order that you need",
      picture: "/image/services/request-documentation.png",
      path: "request-documentation",
    },
    {
      title: "Other Services",
      words: "You can choose the Smart Hands order that you need",
      picture: "/image/services/other-services.png",
      path: "other-services",
    },
    {
      title: "Cross Connect",
      words: "You can choose the Interconnection order that you need",
      picture: "/image/services/cross-connect.png",
      path: "cross-connect",
    },
    {
      title: "Cross Connect Removal",
      words: "You can choose the Interconnection order that you need",
      picture: "/image/services/cross-connect-removal.png",
      path: "cross-connect-removal",
    },
    {
      title: "Power Management",
      words: "You can choose the Collocation order that you need",
      picture: "/image/services/power-management.png",
      path: "power-management",
    },
    {
      title: "Site Visit",
      words: "You can choose the Interconnection order that you need",
      picture: "/image/services/site-visit.png",
      path: "site-visit",
    },
    {
      title: "Meeting Room",
      words: "You can choose the Meeting Room order that you need",
      picture: "/image/services/meeting-room.png",
      path: "meeting-room",
    },
  ];

  return (
    <Box
      sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 2 }}
    >
      {content.map((item) => {
        return (
          <Link
            to={item.path}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Card key={item.title} sx={{ width: "20vw", height: "15vh" }}>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <CardMedia
                  component="img"
                  image={item.picture}
                  alt={item.title}
                  sx={{ width: 46, height: 46, margin: "0.5em 0 0 0.5em" }}
                />
                <CardContent>
                  <Typography gutterBottom variant="body1" component="div">
                    {item.title}
                  </Typography>
                </CardContent>
              </Box>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginLeft: "0.5em" }}
              >
                {item.words}
              </Typography>
            </Card>
          </Link>
        );
      })}
    </Box>
  );
};

export default ServiceOrder;
