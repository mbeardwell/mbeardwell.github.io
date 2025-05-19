const ENDPOINT = "https://corsproxy.io/?https://tryhackme.com/api/v2/public-profile?username=mbeardwell";

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
export async function getStats(): Promise<any> {
    let json: any = null;

    try {
        const response = await fetch(ENDPOINT);
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        json = await response.json();
        if (json["status"] !== "success") throw new Error(`Error: status is ${json["status"]}`);
    } catch (error: any) {
        console.error(error.message);
    }
    
    return json["data"];
}
