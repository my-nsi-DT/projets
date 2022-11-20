FROM python:3-slim

COPY ./requirements.txt .

RUN pip install --default-timeout=100 -r requirements.txt
EXPOSE 5000

COPY chatroom.py .

CMD ["python","chatroom.py"]