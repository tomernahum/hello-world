div = document.createElement("div");
testing_text_node = document.createElement("p")
testing_text_node.textContent = "Testing website"
testing_text_node.style.cssText = "color:white; background:darkslategrey; border: 10px solid indigo; padding: 10px"

div.appendChild(testing_text_node)
document.body.appendChild(div)