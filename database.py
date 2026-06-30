import firebase_admin

from firebase_admin import credentials
from firebase_admin import firestore

from app.config import FIREBASE_KEY

cred = credentials.Certificate(FIREBASE_KEY)

firebase_admin.initialize_app(cred)

db = firestore.client()