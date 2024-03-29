export const SERVER_PORT = process.env["HTTP-PORT"] || 6896;
export const CONFIG_FILE = process.env["CONFIG-FILE"] || "config.json";
export const ALLOWED_IPS = (() => {
    const ips = process.env["ALLOWED-IPS"];
    return ips ? ips.split(",") : [];
})();

export const COMMITS_OF = (user: string, repo: string, branch?: string) => {
    let url: string = `https://api.github.com/repos/${user}/${repo}/commits`;
    branch && (url += `?sha=${branch}`); return url;
};
export const RELEASES_OF = (user: string, repo: string) => `https://api.github.com/repos/${user}/${repo}/releases`;

export const DEFAULT_RESPONSE = {retcode: 0, code: 0};
export const ACCESS_DENIED = {retcode: 1, code: 1, msg: "Access denied."};

export const URLS = {
    commits: {
        gc_stable: COMMITS_OF("Grasscutters", "Grasscutter"),
        gc_dev: COMMITS_OF("Grasscutters", "Grasscutter", "development"),
        cultivation: COMMITS_OF("Grasscutters", "Cultivation")
    },
    releases: {
        gc_stable: RELEASES_OF("Grasscutters", "Grasscutter"),
        cultivation: RELEASES_OF("Grasscutters", "Cultivation")
    }
};