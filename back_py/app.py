from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/")
async def root(request: Request):
    try:
        input_text = await request.json()
        
        if not input_text:
            raise HTTPException(status_code=400, detail="Debe completar el campo")
        
        return input_text
    except Exception as e:
        raise HTTPException(status_code=500, detail="Ocurrio un error en el servidor")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="localhost", port=3000)