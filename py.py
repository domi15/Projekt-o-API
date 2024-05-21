import requests
import time

def get_movie_details(api_key, title):
    url = f'http://www.omdbapi.com/?apikey={api_key}&t={title}'
    response = requests.get(url)
    
    if response.status_code == 200:
        movie_data = response.json()
        if movie_data['Response'] == 'True':
            return movie_data
        else:
            return None
    else:
        print("Error: Unable to connect to OMDb API.")
        return None

def display_movie_details(movie_data):
    print(f"Title: {movie_data.get('Title', 'N/A')}")
    print(f"Year: {movie_data.get('Year', 'N/A')}")
    print(f"Genre: {movie_data.get('Genre', 'N/A')}")
    print(f"Director: {movie_data.get('Director', 'N/A')}")
    print(f"Plot: {movie_data.get('Plot', 'N/A')}")

def main():
    api_key = 'a5b78ae7'
    movie_title = input("Enter the movie title: ")

    movie_data = get_movie_details(api_key, movie_title)
    if movie_data:
        display_movie_details(movie_data)
    else:
        print("Movie not found.")

if __name__ == "__main__":
    main()
    
time.sleep(20)
