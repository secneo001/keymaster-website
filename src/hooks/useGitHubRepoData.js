import { useState, useEffect } from 'react';

const useGitHubRepoData = (repoName) => {
    const [projectData, setProjectData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;
        const cachedData = JSON.parse(localStorage.getItem(repoName));

        // Check if there is cached data and if it's not older than one hour
        if (cachedData && new Date().getTime() - cachedData.timestamp < 3600000) {
            if (isMounted) {
                setProjectData(cachedData.data);
                setLoading(false);
            }
        } else {
            // Fetch data from GitHub API
            async function fetchData() {
                try {
                    setLoading(true);
                    const repoResponse = await fetch(`https://api.github.com/repos/secneo001/${repoName}`);
                    const repoData = await repoResponse.json();
                    const releasesResponse = await fetch(`https://api.github.com/repos/secneo001/${repoName}/releases`);
                    const releasesData = (await releasesResponse.json()).sort((a, b) => new Date(a.published_at) + new Date(b.published_at));

                    if (isMounted) {
                        const newData = {
                            ...repoData,
                            releases: {
                                all: releasesData,
                                stable: releasesData.find((v) => !v.prerelease),
                            },
                        };
                        setProjectData(newData);
                        setLoading(false);
                        localStorage.setItem(repoName, JSON.stringify({ data: newData, timestamp: new Date().getTime() }));
                    }
                } catch (error) {
                    setError('Error fetching data from GitHub API');
                    setLoading(false);
                }
            }

            if (repoName) {
                fetchData();
            }
        }

        return () => {
            isMounted = false;
        };
    }, [repoName]);

    return { projectData, loading, error };
};

export const getAssetDownloadCount = (projectData) => {
    let totalDownloadCount = 0;

    projectData.releases.all.forEach((release) => {
        totalDownloadCount += getReleaseDownloadCount(release);
    });

    return totalDownloadCount;
};

export const getReleaseDownloadCount = (release) => {
    let totalDownloadCount = 0;

    release.assets.forEach((asset) => {
        totalDownloadCount += asset.download_count;
    });

    return totalDownloadCount;
};

export default useGitHubRepoData;
