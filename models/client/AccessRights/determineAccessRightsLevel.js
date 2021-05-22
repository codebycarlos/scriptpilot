import { API } from "./_dependencies"
export async function determineAccessRightsLevel(session) {
    return await API.Auth.getAccessRights(session)
}