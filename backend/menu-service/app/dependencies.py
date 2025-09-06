from core.db import get_cassandra_session

def get_db():
    session = get_cassandra_session()
    try:
        yield session
    finally:
        session.shutdown()
