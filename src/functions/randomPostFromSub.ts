import fetch from "node-fetch";
import { SORT_TYPES } from "../types/sort-types";
import { POST, RESPONSE } from "../types/response";

type data = {
    reddit: string,
    sortType: string,
    postGetLimit: number,
};

export async function randomPostFromSub(data: data): Promise<POST> {
    const { reddit, sortType, postGetLimit } = data;

    if (!SORT_TYPES.includes(sortType)) {
        throw new Error(`Invalid sort type: ${sortType}`);
    }

    const response = await fetch(`https://reddit.com/r/${reddit}/${sortType}.json?limit=${postGetLimit}`);
    const responseJSON = await response.json() as RESPONSE;

    if (responseJSON.error) {
        return null as unknown as POST
    }

    const posts = responseJSON.data.children.map(child => child.data) as Array<any>;
    const post = posts[Math.floor(Math.random() * posts.length)];

    // Check for errors
    if (post === undefined || post === null) {
        return null as unknown as POST;
    }

    return {
        image: post.url.replace("gifv", "gif"),
        title: post.title,
        content: post.selftext,
        upvotes: post.ups,
        downvotes: post.downs,
        upvoteRatio: post.upvote_ratio,
        nsfw: post.over_18,
        author: post.author,
        category: post.category,
        thumbnail: post.thumbnail,
        url: post.url.replace("//r", "/r").replace("r//", "r/"),
        html: post.selftext_html,
        createdUTC: post.created_utc,
        raw: post,
    } as POST;
}
