import os
import re

seeder_path = "backend/src/seeder.ts"
with open(seeder_path, "r") as f:
    content = f.read()

# Extract the products array
match = re.search(r"const products = \[.*?\];", content, re.DOTALL)
if match:
    products_array = match.group(0)
    
    # Create data/products.ts
    os.makedirs("backend/src/data", exist_ok=True)
    with open("backend/src/data/products.ts", "w") as f:
        f.write("export " + products_array + "\n")
        
    # Replace in seeder.ts
    new_seeder_content = content.replace(products_array, "")
    new_seeder_content = "import { products } from './data/products';\n" + new_seeder_content
    with open(seeder_path, "w") as f:
        f.write(new_seeder_content)
    print("Successfully extracted products.")
else:
    print("Could not find products array.")
