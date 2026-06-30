from app.database import db


def add_donation(data):

    db.collection("donations").add(data)


def get_all_donations():

    docs = db.collection("donations").stream()

    result = []

    for doc in docs:

        item = doc.to_dict()
        item["id"] = doc.id
        result.append(item)

    return result


def accept_donation(doc_id):

    db.collection("donations").document(doc_id).update({
        "status": "Accepted"
    })