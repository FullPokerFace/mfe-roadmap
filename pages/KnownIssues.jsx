import React, { useState, useEffect } from 'react';
import RoadmapDialog from '../src/components/RoadmapDialog';
import GradientText from '../src/components/GradientText';

const issuesList = [
    {
        id: 1,
        title: "Module Federation Build Error",
        solution: "# Solution\n\n1. Check webpack configuration\n2. Ensure all dependencies are correctly listed\n3. Verify shared modules configuration\n\n```javascript\nmodule.exports = {\n  plugins: [\n    new ModuleFederationPlugin({\n      name: 'host',\n      shared: {\n        react: { singleton: true },\n        'react-dom': { singleton: true }\n      }\n    })\n  ]\n}\n```"
    },
    {
        id: 2,
        title: "Remote Container Loading Failed",
        solution: "# Remote Container Error\n\nEnsure the following:\n\n1. Remote application is running\n2. Correct port configuration\n3. CORS settings are properly configured"
    },
    // Add more issues as needed
];

const KnownIssues = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredIssues, setFilteredIssues] = useState(issuesList);
    const [selectedIssue, setSelectedIssue] = useState(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    useEffect(() => {
        const filtered = issuesList.filter(issue =>
            issue.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredIssues(filtered);
    }, [searchTerm]);

    const handleIssueClick = (issue) => {
        setSelectedIssue(issue);
        setIsDialogOpen(true);
    };

    return (
        <>
            <div className="min-h-screen p-8">
                <div className="text-center mb-12">
                    <GradientText size="7xl" className={'mx-auto'}>Known Issues</GradientText>
                    <p className="text-neutral-100 max-w-xl text-center mx-auto mt-10">
                        Browse through common issues encountered during MFE migration. Click on any issue to view detailed solutions and implementation guidelines.
                    </p>
                </div>
                {/* Search Bar */}
                <div className="mb-8 px-20">
                    <input
                        type="text"
                        placeholder="Search known issues..."
                        className="w-full p-4 rounded-lg bg-transparent border border-gray-300 text-white text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <p className="text-neutral-100 max-w-xl mt-20 mb-4">
                    Error code. Click to see solution
                </p>
                {/* Issues List */}
                <div className="grid gap-4 ">
                    {filteredIssues.map((issue) => (
                        <div
                            key={issue.id}
                            className="border bg-gray-900 border-gray-300 rounded-lg p-6 cursor-pointer hover:border-blue-500 transition-colors duration-200"
                            onClick={() => handleIssueClick(issue)}
                        >
                            <h3 className="text-xl font-semibold text-white">
                                {issue.title}
                            </h3>
                        </div>
                    ))}
                </div>

                {/* Solution Dialog */}
                {isDialogOpen && (
                    <RoadmapDialog
                        mdContent={selectedIssue?.solution}
                        onClose={() => setIsDialogOpen(false)}
                    />
                )}
            </div>
        </>

    );
};

export default KnownIssues;