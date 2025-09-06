import os 
from cassandra.cluster import Cluster
from cassandra.auth import PlainTextAuthProvider

CASSANDRA_HOSTS = os.getenv("CASSANDRA_HOSTS", "db").split(",")  # docker service name
CASSANDRA_PORT = int(os.getenv("CASSANDRA_PORT", 9042))
CASSANDRA_USER = os.getenv("CASSANDRA_USER", "cassandra")
CASSANDRA_PASSWORD = os.getenv("CASSANDRA_PASSWORD", "cassandra")
CASSANDRA_KEYSPACE = os.getenv("CASSANDRA_KEYSPACE", "menus")


def get_cassandra_session():
    auth_provider = PlainTextAuthProvider(
        username=CASSANDRA_USER,
        password=CASSANDRA_PASSWORD
    )

    cluster = Cluster(CASSANDRA_HOSTS, port=CASSANDRA_PORT,
                      auth_provider=auth_provider)
    session = cluster.connect()
    session.keyspace(CASSANDRA_KEYSPACE)
    return session



