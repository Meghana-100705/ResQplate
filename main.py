from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.donation_routes import router as donation_router
from app.routes.dashboard_routes import router as dashboard_router

app = FastAPI(title="ResQPlate API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(donation_router)
app.include_router(dashboard_router)


@app.get("/")
def home():
    return {"message": "Welcome to ResQPlate Backend"}