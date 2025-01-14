'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Download, FileText, Send, CheckCircle, AlertCircle } from 'lucide-react'
import Link from 'next/link'

export default function ManuscriptSubmission() {
    return (
        <div className="min-h-screen pt-20 sm:pt-24 my-6">
            <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <motion.header
                    className="mb-12"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-bold text-center mb-4 text-blue-600 dark:text-blue-400">
                        Manuscript Submission
                    </h1>
                    <div className="text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto space-y-4">
                        <p>
                            All submitted technical article (full-paper) will be reviewed by the 5th ICDICI 2024 Technical Committee.
                        </p>
                        <p>
                            Early submission is encouraged to ensure that the committee members have ample time to review the submitted technical papers.
                        </p>
                        <p>
                            Authors are strongly encouraged to submit their full-paper online to the Conference Email: {' '}
                            <Link href="mailto:icdici.conf@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                                icdici.conf@gmail.com
                            </Link>
                            {' '} on or before the &#34;Full Paper Submission Deadline&#34; mentioned in the conference homepage.
                        </p>
                    </div>
                </motion.header>

                <Tabs defaultValue="guidelines" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 mb-8 bg-blue-100 dark:bg-gray-700 p-1 rounded-lg">
                        <TabsTrigger
                            value="guidelines"
                            className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-400"
                        >
                            Guidelines
                        </TabsTrigger>
                        <TabsTrigger
                            value="paper-content"
                            className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-400"
                        >
                            Paper Content
                        </TabsTrigger>
                        <TabsTrigger
                            value="submission"
                            className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-400"
                        >
                            Submission
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="guidelines">
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5}}
                            className="space-y-6"
                        >
                            <Card className="border-l-4 border-l-blue-500">
                                <CardHeader>
                                    <CardTitle className="text-2xl text-blue-600 dark:text-blue-400">Full-Paper Submission</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="h-5 w-5 mt-0.5 text-blue-500" />
                                            <span className="text-gray-700 dark:text-gray-300">
                                                Papers should be no more than 3000 words (Minimum 4 pages and maximum 8 pages) and should be written in English. Any entry submitted in a different language or without author details (Affiliation and Email ID) will not be considered
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="h-5 w-5 mt-0.5 text-blue-500" />
                                            <span className="text-gray-700 dark:text-gray-300">
                                                You are welcome to include additional information, such as illustrations, graphs or tables, as attachments
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="h-5 w-5 mt-0.5 text-blue-500" />
                                            <span className="text-gray-700 dark:text-gray-300">
                                                Please do not submit the same paper more than once
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="h-5 w-5 mt-0.5 text-blue-500" />
                                            <span className="text-gray-700 dark:text-gray-300">
                                                Authors are not allowed to submit multiple papers within the same category. However, please do not submit slightly modified papers multiple times, as they will not be considered
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="h-5 w-5 mt-0.5 text-blue-500" />
                                            <span className="text-gray-700 dark:text-gray-300">
                                                Prior to full-paper submissions –all author&#39;s consent must be obtained
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="h-5 w-5 mt-0.5 text-blue-500" />
                                            <span className="text-gray-700 dark:text-gray-300">
                                                If you have submitted your full-paper previously to any conference or it is under consideration elsewhere, you cannot submit your full-paper to this conference
                                            </span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="border-l-4 border-l-yellow-500">
                                <CardHeader>
                                    <CardTitle className="text-2xl text-yellow-600 dark:text-yellow-400">Guidelines for Accepted Abstracts</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="h-5 w-5 mt-0.5 text-yellow-500" />
                                            <span className="text-gray-700 dark:text-gray-300">
                                                You will be notified on the acceptance notification date if your full-paper has been accepted. All authors who submitted their papers will receive an email stating if their papers have been accepted or not
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="h-5 w-5 mt-0.5 text-yellow-500" />
                                            <span className="text-gray-700 dark:text-gray-300">
                                                All the presenters will receive complimentary access to all two days of the Technical Conference
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="h-5 w-5 mt-0.5 text-yellow-500" />
                                            <span className="text-gray-700 dark:text-gray-300">
                                                The organiser assumes no obligation for expenses by authors for travel and accommodation to attend and speak at the event
                                            </span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="border-l-4 border-l-red-500">
                                <CardHeader>
                                    <CardTitle className="text-2xl text-red-600 dark:text-red-400">Plagiarism Policy</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="mb-4 text-gray-700 dark:text-gray-300">
                                        After receiving the initial full-paper submission, we check the plagiarism using a software and afterwards it is being handled as follows:
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="h-5 w-5 mt-0.5 text-red-500" />
                                            <span className="text-gray-700 dark:text-gray-300">
                                                If Plagiarism is {'<'}15%: If we find Single Source {'<'}10% then only we will directly send paper for further review process
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="h-5 w-5 mt-0.5 text-red-500" />
                                            <span className="text-gray-700 dark:text-gray-300">
                                                If Plagiarism is 15-30%: In this case, we will send back to the author for further revision
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="h-5 w-5 mt-0.5 text-red-500" />
                                            <span className="text-gray-700 dark:text-gray-300">
                                                If Plagiarism {'>'}30%: We reject Article straight forward
                                            </span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="border-l-4 border-l-orange-500">
                                <CardHeader>
                                    <CardTitle className="text-2xl text-orange-600 dark:text-orange-400">Informalism/Machine Generated Phrases</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-start gap-2">
                                        <AlertCircle className="h-5 w-5 mt-0.5 text-orange-500" />
                                        <p className="text-gray-700 dark:text-gray-300">
                                            Your full-paper should not use language that is informal in tone / AI-generated in the title or body text. The use of such terms will be considered as &#34;Indirect Plagiarism&#34; and will result in careful scrutiny by the Technical Committee and may result in rejection from the evaluation process.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-l-4 border-l-purple-500">
                                <CardHeader>
                                    <CardTitle className="text-2xl text-purple-600 dark:text-purple-400">Technical Categories</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        There is a choice of 3 different technical categories, all of which have multiple subcategories. Please have a thorough read through all of them and check whether your research scope falls under any one of the topic listed in {' '}
                                        <Link href="#" className="text-purple-600 dark:text-purple-400 hover:underline">
                                            Call for Papers
                                        </Link>.
                                    </p>
                                    <p className="mt-4 text-gray-700 dark:text-gray-300">
                                        Please do not submit the same paper or a slightly modified version more than once as duplicates will be deleted.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </TabsContent>

                    <TabsContent value="paper-content">
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5}}
                            className="space-y-6"
                        >
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-2xl text-blue-600 dark:text-blue-400">Full-Paper Content</CardTitle>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Your full-paper should contain adequate information for review by the Technical Committee including:
                                    </p>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <div className="grid gap-8 md:grid-cols-2">
                                        {[
                                            {
                                                title: "Abstract",
                                                description: "Summarise the scope and nature of the work including few lines about the results (250-300 words)"
                                            },
                                            {
                                                title: "Introduction",
                                                description: "Brief overview the technology considered, why this research work was undertaken, technology used, etc."
                                            },
                                            {
                                                title: "Literature Review",
                                                description: "A brief summarization on the existing research works and its limitations"
                                            },
                                            {
                                                title: "Technical Contributions",
                                                description: "Describe the significance of the proposed research objective by listing technical contributions"
                                            },
                                            {
                                                title: "Methodology",
                                                description: "Dataset description, proposed workflow, block diagram, architecture, mathematical formulation, and theoretical description"
                                            },
                                            {
                                                title: "Results and Discussion",
                                                description: "Discuss about the simulation or implementation of the proposed methods and discuss about the resultant performance analysis with a comparative study"
                                            },
                                            {
                                                title: "Conclusion and Future Scope",
                                                description: "Summarise the results and major conclusions to be presented, explain how these differ from previous work on the same subject"
                                            }
                                        ].map((section, index) => (
                                            <div key={index} className="space-y-2">
                                                <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                                                    {section.title}
                                                </h3>
                                                <p className="text-gray-600 dark:text-gray-300">
                                                    {section.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="mt-8 text-gray-600 dark:text-gray-300">
                                        We also accept the research metadata analysis and review works.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </TabsContent>

                    <TabsContent value="submission">
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5}}
                            className="space-y-6"
                        >
                            <Card className="border-l-4 border-l-purple-500">
                                <CardHeader>
                                    <CardTitle className="text-2xl text-purple-600 dark:text-purple-400">
                                        2024 Call For Papers Now Open!
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="p-4 bg-white dark:bg-gray-700 rounded-lg">
                                                <h3 className="font-semibold mb-2">Conference Brochure</h3>
                                                <Button variant="outline" className="w-full gap-2">
                                                    <Download className="h-4 w-4" />
                                                    Download Brochure
                                                </Button>
                                            </div>
                                            <div className="p-4 bg-white dark:bg-gray-700 rounded-lg">
                                                <h3 className="font-semibold mb-2">Submit Papers</h3>
                                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                                                    Send your papers to:
                                                </p>
                                                <Button asChild className="w-full gap-2">
                                                    <Link href="mailto:icdici.conf@gmail.com">
                                                        <Send className="h-4 w-4" />
                                                        icdici.conf@gmail.com
                                                    </Link>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-l-4 border-l-indigo-500">
                                <CardHeader>
                                    <CardTitle className="text-2xl text-indigo-600 dark:text-indigo-400">
                                        Manuscript Templates
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-gray-600 dark:text-gray-300">
                                        To help ensure correct formatting, please use the style files, which can be downloaded from the links below as templates for your submission. These include LaTeX and Word templates.
                                    </p>
                                    <div className="flex flex-wrap gap-4">
                                        <Button variant="outline" className="gap-2">
                                            <Download className="h-4 w-4" />
                                            MS Word Template
                                        </Button>
                                        <Button variant="outline" className="gap-2">
                                            <Download className="h-4 w-4" />
                                            LaTeX Template
                                        </Button>
                                        <Button variant="outline" asChild>
                                            <Link
                                                href="https://www.ieee.org/conferences/publishing/templates.html"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="gap-2"
                                            >
                                                IEEE Templates
                                                <FileText className="h-4 w-4" />
                                            </Link>
                                        </Button>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300 mt-4">
                                        Violations of any of the above paper specifications may result in rejection of your paper. Please note that the LaTeX template does not allow for keywords. If you are using the Latex template, do not include keywords in your paper.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}

