import step1Content from '../public/content/roadmap-content/prototype.md';
import step2Content from '../public/content/roadmap-content/webpackConfig.md';
import step3Content from '../public/content/roadmap-content/versioning.md';
import step4Content from '../public/content/roadmap-content/cicd.md';
import step5Content from '../public/content/roadmap-content/poc.md';
import step6Content from '../public/content/roadmap-content/poc.md';
import step7Content from '../public/content/roadmap-content/poc.md';
import step8Content from '../public/content/roadmap-content/poc.md';
import step9Content from '../public/content/roadmap-content/poc.md';
import step10Content from '../public/content/roadmap-content/poc.md';

export const steps = [
    {
        title: "MFE Prototype",
        passed: true,
        bottom: 19,
        left: 3,
        mdContent: step1Content
    },
    {
        title: "CSP Webpack Configuration",
        passed: true,
        bottom: 18,
        left: 11,
        mdContent: step2Content
    },
    {
        title: "Dynamic Version Management",
        passed: true,
        current: false,
        bottom: 22,
        left: 19,
        mdContent: step3Content
    },
    {
        title: "CI/CD & POC",
        passed: false,
        current: true,
        bottom: 23,
        left: 30,
        mdContent: step4Content
    },
    {
        title: "Migration Preparation",
        passed: false,
        current: false,
        bottom: 32,
        left: 38,
        mdContent: step5Content
    },
    {
        title: "Migration",
        passed: false,
        current: false,
        bottom: 39,
        left: 54,
        mdContent: step6Content
    },
    {
        title: "Performance Optimization & Error Handling",
        passed: false,
        current: false,
        bottom: 48,
        left: 60,
        mdContent: step7Content
    },
    {
        title: "Dependency Cleanup & QA Testing",
        passed: false,
        current: false,
        bottom: 58,
        left: 68,
        mdContent: step8Content
    },
    {
        title: "MFE Project Completion",
        passed: false,
        current: false,
        bottom: 68,
        left: 75,
        mdContent: step10Content
    }
];