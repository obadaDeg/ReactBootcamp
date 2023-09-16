import React, { useState } from "react";
import "./App.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Switch from "@mui/material/Switch";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";


function AccordionItem({ title, content, expanded, onChange }) {
  return (
    <Accordion expanded={expanded} onChange={onChange}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{content}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}

function App() {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [btnState, setBtnState] = useState(false);

  const handleSwitchChange = (event) => {
    setBtnState(event.target.checked);
  };

  const cardClass = btnState ? "card-large" : "card-small";

  return (
    <div className="App">
      <AccordionItem
        title="Accordion 1"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
      />
      <AccordionItem
        title="Accordion 2"
        content={<Switch {...label} onChange={handleSwitchChange} />}
      />

      <div>
        <Card sx={{ maxWidth: 500, marginLeft: 50 }} className={cardClass}>
          <CardActionArea>
            <CardMedia
              component="img"
              height={
                btnState
                  ? "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/87f1d34d-2002-4608-b166-a5c6fac0f344/dfbdtjp-19d6236e-7aab-4183-99ac-5a5be3485452.png/v1/fill/w_1234,h_648/fredrinn_mlbb_png_transparant_by_dechunf_dfbdtjp-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjcyIiwicGF0aCI6IlwvZlwvODdmMWQzNGQtMjAwMi00NjA4LWIxNjYtYTVjNmZhYzBmMzQ0XC9kZmJkdGpwLTE5ZDYyMzZlLTdhYWItNDE4My05OWFjLTVhNWJlMzQ4NTQ1Mi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Wqon2Zbvy6hQ3UHWBGBkxZPL9nsXKXIZ9aLD4SKKNKE"
                  : "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjDSXVET9-A7itwGJDlHBHFNnvfKhA1ehdSPDN2X2pC98BmGjjQvFL_04RUIxO5GzsO8TNuVII88Y-5FfP4fQ-PYlWOoY7nXPR1B3tDXimRiXMZNvuvmAreY7yVkeAKGYkllunFjAWtYAP5ETNYvbpKDQQ7oo6wJcVASeWtAOh7VJ2FON9Xc93jpIyKcw/s3836/fredrinn-png%20(2).jpg"
              }
              image={
                btnState
                  ? "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/87f1d34d-2002-4608-b166-a5c6fac0f344/dfbdtjp-19d6236e-7aab-4183-99ac-5a5be3485452.png/v1/fill/w_1234,h_648/fredrinn_mlbb_png_transparant_by_dechunf_dfbdtjp-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjcyIiwicGF0aCI6IlwvZlwvODdmMWQzNGQtMjAwMi00NjA4LWIxNjYtYTVjNmZhYzBmMzQ0XC9kZmJkdGpwLTE5ZDYyMzZlLTdhYWItNDE4My05OWFjLTVhNWJlMzQ4NTQ1Mi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Wqon2Zbvy6hQ3UHWBGBkxZPL9nsXKXIZ9aLD4SKKNKE"
                  : "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjDSXVET9-A7itwGJDlHBHFNnvfKhA1ehdSPDN2X2pC98BmGjjQvFL_04RUIxO5GzsO8TNuVII88Y-5FfP4fQ-PYlWOoY7nXPR1B3tDXimRiXMZNvuvmAreY7yVkeAKGYkllunFjAWtYAP5ETNYvbpKDQQ7oo6wJcVASeWtAOh7VJ2FON9Xc93jpIyKcw/s3836/fredrinn-png%20(2).jpg"
              }
              alt=""
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Fredrinn
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Greeting from Los Pocatos
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}


export default App;
