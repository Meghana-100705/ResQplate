import os
from dotenv import load_dotenv

load_dotenv()

FIREBASE_KEY = os.getenv("FIREBASE_KEY")
PROJECT_NAME = os.getenv("PROJECT_NAME")