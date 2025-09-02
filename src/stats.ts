const ENDPOINT = "https://corsproxy.io/?https://tryhackme.com/api/v2/public-profile?username=mbeardwell";

/*
Example data:

{
  "status": "success",
  "data": {
    "_id": "5e91df70f9ccf9046266a9a6",
    "id": 43470,
    "avatar": "https://tryhackme-images.s3.amazonaws.com/user-avatars/5e91df70f9ccf9046266a9a6-1748646256912",
    "username": "mbeardwell",
    "level": 12,
    "country": "gb",
    "about": "Security Analyst · Forensics, OSINT",
    "linkedInUsername": "",
    "githubUsername": "",
    "twitterUsername": "",
    "instagramUsername": "",
    "personalWebsite": "mbeardwell.com",
    "subscribed": 0,
    "badgesNumber": 17,
    "dateSignUp": "2020-04-11T15:17:04.267Z",
    "certificateType": null,
    "completedRoomsNumber": 116,
    "streak": 0,
    "rank": 25385,
    "topPercentage": 2,
    "isInTopTenPercent": true,
    "badgeImageURL": "https://tryhackme-badges.s3.amazonaws.com/mbeardwell.png"
  }
}
*/


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
