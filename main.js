const recipe_object = {
    id: 1,
    recipe_name: "Chocolate Raspberry Brownies",
    recipe_image_url: "image/Chocolate Raspberry Brownies.jpg",
  
    
    areas: "America",
    ingridients: {
      ingredient_name: ["Dark Chocolate", "Milk Chocolate", "Salted Butter", "Light Brown Soft Sugar", "Eggs", "Plain Flour", "Cocoa", "Raspberries",],
      amount: ["200g", "100g", "250g", "400g", "4", "150g", "50g", "500g"],
    },
  
  
    


  
  method_para:
  "Heat oven to 180C/160C fan/gas 4. Line a 20 x 30cm baking tray tin with baking parchment. Put the chocolate, butter and sugar in a pan and gently melt, stirring occasionally with a wooden spoon. Remove from the heat. Stir the eggs, one by one, into the melted chocolate mixture. Sieve over the flour and cocoa, and stir in. Stir in half the raspberries, scrape into the tray, then scatter over the remaining raspberries. Bake on the middle shelf for 30 mins or, if you prefer a firmer texture, for 5 mins more. Cool before slicing into squares. Store in an airtight container for up to 3 days",
    youtube_link: "https://www.youtube.com/embed/Pi89PqsAaAg?si=pUKpGX0a5oGKijID",
  };
  

  const recipe_name = document.querySelector(".title");
  const method_para = document.querySelector(".method_para");
  const recipe_areas = document.querySelector(".areas");
  const recipe_image_url = document.querySelector(".recipe_image");
  const youtube_link = document.querySelector(".youtube_link");
  const ing_list=document.querySelector('.ing_list')
  recipe_name.innerHTML = recipe_object.recipe_name;
  method_para.innerHTML = recipe_object.method_para;
  recipe_areas.innerHTML = recipe_object.areas;
  recipe_image_url.src = recipe_object.recipe_image_url;
  
  youtube_link.src=recipe_object.youtube_link;
  recipe_object.ingridients.ingredient_name.forEach((item)=>{
                                                      let li=document.createElement("li");
                                                      li.innerHTML=item;
                                                      ing_list.appendChild(li);
                                                      
                                    
  });
  const amount_list=document.querySelector('.amount_list')
  recipe_object.ingridients.amount.forEach((item)=>{
                                                      let li=document.createElement("li");
                                                      li.innerHTML=item;
                                                      amount_list.appendChild(li);
                                                      
                                    
  })
  
  
  
  // ing_list.style.backgroundColor="red"
  
  
  