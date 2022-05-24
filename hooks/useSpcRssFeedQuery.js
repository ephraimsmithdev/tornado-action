import { useQuery } from "react-query";
import { fetchSpcRssFeed } from "../services/SPC/SPCService";

export const useSPC_RSS_Feed = (spcRssPath) => {
	return useQuery(["spc_rss_feeds", spcRssPath], () =>
		fetchSpcRssFeed(spcRssPath)
	);
};