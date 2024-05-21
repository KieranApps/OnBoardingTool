
export async function getProjects(id, user) {
    if (id && user) {
        // Cant have both, how did this even happen?
        return;
    }

    if (!id && !user) {
        // get all
    }

    if (id && !user) {
        // get single
    }

    if (!id && user) {
        // get all assigned to user
    }
}