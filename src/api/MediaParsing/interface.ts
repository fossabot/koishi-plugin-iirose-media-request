
interface MediaData
{
    type: 'music' | 'video';
    name: string;
    signer: string;
    cover: string;
    link: string;
    url: string;
    duration: number;
    bitRate: number;
    error: string | null;

}
interface Attribute
{
    name: string;
    value: string;
}

interface ElementAttributes
{
    tagName: string;
    attrs: Attribute[];
    classList: string[];
}

interface PageInfo
{
    cid: number;
    page: number;
    from: string;
    part: string;
    duration: number;
    vid: string;
    weblink: string;
    dimension: {
        width: number;
        height: number;
        rotate: number;
    };
    first_frame: string;
}