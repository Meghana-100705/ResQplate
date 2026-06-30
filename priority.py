def calculate_priority(
    freshness,
    distance,
    demand,
    volunteer
):

    score = (
        freshness * 0.4
        + distance * 0.3
        + demand * 0.2
        + volunteer * 0.1
    )

    return round(score,2)