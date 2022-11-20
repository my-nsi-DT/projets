
## Configuration
```bash
pip install -r requirements.txt -v
```

## Run it
```bash
docker-compose build
docker-compose up kavu-database
# Attendre que la db se lance
# TODO: ajouter un docker-wait-for-it
docker-compose up kavu-backend
```
## Usage

```python
#Get all dechets
curl http://localhost:5000/dechet/
# Post dechets position
curl -d "latitude=42&longitude=43&categorie=VHU" -X POST "http://localhost:5000/dechet/"
# Post dechet image
curl -F "photo=@mon_image.jpg" -X POST http://localhost:5000/photo/
```

https://www.postgresqltutorial.com/postgresql-python/connect/
