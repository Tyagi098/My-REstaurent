import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
        "My Restaurant" is a charming dining establishment that prides itself on delivering a memorable culinary experience to its patrons. Located in a bustling neighborhood, the restaurant boasts a warm and inviting ambiance, with contemporary decor that blends seamlessly with touches of traditional elements, creating a cozy and welcoming atmosphere for   </p> <br />

        <p> The menu at "My Restaurant" showcases a diverse selection of dishes, representing an exquisite fusion of global cuisines. From classic favorites to innovative creations, the restaurant caters to a broad range of palates. The culinary team consists of skilled chefs who are passionate about crafting delectable dishes using only the finest and freshest ingredients sourced from local vendors and trusted suppliers.  </p>

 <br />

<p>The restaurant offers an extensive range of dishes to satisfy various dietary preferences, including vegetarian, vegan, and gluten-free options. To complement the delightful flavors, the well-stocked bar serves an array of handcrafted cocktails, fine wines, and artisanal</p>
 <br />

<p>With a strong emphasis on attentive service, the staff at "My Restaurant" is friendly, knowledgeable, and always ready to assist guests in choosing their perfect meal or drink. Whether it's a romantic dinner for two, a family celebration, or a business gathering, the restaurant's dedicated team ensures that each dining experience is nothing short of exceptional. 

In addition to the main dining area, "My Restaurant" also offers private dining spaces that can be reserved for intimate gatherings or special occasions, providing an extra touch of exclusivity and personalized service. 

As a community-focused establishment, "My Restaurant" actively participates in local events and supports various charitable initiatives, aiming to give back to the community that has welcomed it with open arms </p>

     <br />  
      </Box>
    </Layout>
  );
};

export default About;
