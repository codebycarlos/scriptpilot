import { API } from "./_dependencies"
export async function determineAccessRightsLevel() {
    return await API.Auth.getAccessRights()
}