import sys
import os

sys.path.insert(0, os.pathdirname(__file__))

from app import app

if __name__ == "__main__":
    app.run()   
