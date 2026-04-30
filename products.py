import os
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin

BASE_URL = "https://baseuscolombo.lk/"
SAVE_FOLDER = "downloaded_images"

headers = {
    "User-Agent": "Mozilla/5.0"
}

def create_folder():
    if not os.path.exists(SAVE_FOLDER):
        os.makedirs(SAVE_FOLDER)

def get_page(url):
    try:
        response = requests.get(url, headers=headers)
        return response.text
    except:
        print("Error fetching page:", url)
        return None

def download_image(img_url, count):
    try:
        img_data = requests.get(img_url, headers=headers).content
        filename = os.path.join(SAVE_FOLDER, f"image_{count}.jpg")
        with open(filename, "wb") as f:
            f.write(img_data)
        print(f"Downloaded: {filename}")
    except:
        print("Failed:", img_url)

def extract_images(html):
    soup = BeautifulSoup(html, "html.parser")
    images = soup.find_all("img")

    img_links = []
    for img in images:
        src = img.get("src")
        if src:
            full_url = urljoin(BASE_URL, src)
            img_links.append(full_url)

    return img_links

def main():
    create_folder()

    html = get_page(BASE_URL)
    if not html:
        return

    img_links = extract_images(html)

    count = 1
    for link in img_links:
        if "product" in link.lower() or ".jpg" in link or ".png" in link:
            download_image(link, count)
            count += 1

if __name__ == "__main__":
    main()