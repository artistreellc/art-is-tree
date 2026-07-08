
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  Activity, 
  Download,
  Search,
  FileJson,
  FileText
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  runComprehensiveSEOAudit, 
  generateJSONReport, 
  generateMarkdownReport 
} from '@/utils/comprehensiveSEOAudit';

const StatusIcon = ({ status }) => {
  switch (status) {
    case 'pass': return <CheckCircle2 className="w-5 h-5 text-green-500" />;
    case 'warning': return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
    case 'critical': return <XCircle className="w-5 h-5 text-red-500" />;
    default: return <Activity className="w-5 h-5 text-gray-500" />;
  }
};

const SEOAuditReportPage = () => {
  const [isAuditing, setIsAuditing] = useState(false);
  const [report, setReport] = useState(null);

  const handleRunAudit = async () => {
    setIsAuditing(true);
    try {
      // Simulate network/processing delay for UI effect
      await new Promise(r => setTimeout(r, 1500));
      const results = await runComprehensiveSEOAudit();
      setReport(results);
    } catch (error) {
      console.error("Audit failed:", error);
    } finally {
      setIsAuditing(false);
    }
  };

  const handleDownloadJSON = () => {
    if (!report) return;
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(generateJSONReport(report));
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", "seo-audit-report.json");
    dlAnchorElem.click();
  };

  const handleDownloadMarkdown = () => {
    if (!report) return;
    const dataStr = "data:text/markdown;charset=utf-8," + encodeURIComponent(generateMarkdownReport(report));
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", "seo-audit-report.md");
    dlAnchorElem.click();
  };

  return (
    <>
      <Helmet>
        <title>Comprehensive SEO Audit | Admin Dashboard</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold text-[#1B4D3E] flex items-center gap-3">
                <Search className="w-8 h-8" />
                Comprehensive SEO Audit
              </h1>
              <p className="text-gray-500 mt-1">Analyze meta tags, headings, content quality, technical SEO, and structured data.</p>
            </div>
            <div className="flex gap-3">
              {report && (
                <>
                  <Button variant="outline" onClick={handleDownloadJSON}>
                    <FileJson className="w-4 h-4 mr-2" /> JSON
                  </Button>
                  <Button variant="outline" onClick={handleDownloadMarkdown}>
                    <FileText className="w-4 h-4 mr-2" /> Markdown
                  </Button>
                </>
              )}
              <Button onClick={handleRunAudit} disabled={isAuditing} className="bg-[#1B4D3E] hover:bg-[#2A7A5E]">
                {isAuditing ? (
                  <><Activity className="w-4 h-4 mr-2 animate-pulse" /> Analyzing...</>
                ) : (
                  <><Search className="w-4 h-4 mr-2" /> Run Full Audit</>
                )}
              </Button>
            </div>
          </div>

          {!report && !isAuditing && (
            <Card className="bg-white text-center py-16 border-dashed border-2">
              <CardContent>
                <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-700 mb-2">No Audit Data Found</h3>
                <p className="text-gray-500 max-w-md mx-auto mb-6">Run a comprehensive SEO audit to scan the website for meta tags, content structure, schema markup, and technical compliance.</p>
                <Button onClick={handleRunAudit} className="bg-[#1B4D3E]">Start Audit</Button>
              </CardContent>
            </Card>
          )}

          {isAuditing && (
            <div className="flex flex-col items-center justify-center py-20 bg-white rounded-xl shadow-sm border border-gray-100">
              <Activity className="w-16 h-16 text-[#D4AF37] animate-pulse mb-4" />
              <h3 className="text-2xl font-bold text-[#1B4D3E] mb-2">Scanning Website</h3>
              <p className="text-gray-500">Analyzing DOM, Meta Tags, and Technical configurations...</p>
            </div>
          )}

          {report && !isAuditing && (
            <Tabs defaultValue="summary" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-6 mb-8 w-full h-auto bg-white p-1 border">
                <TabsTrigger value="summary">Summary</TabsTrigger>
                <TabsTrigger value="meta">Meta Tags</TabsTrigger>
                <TabsTrigger value="headings">Headings</TabsTrigger>
                <TabsTrigger value="tech">Technical</TabsTrigger>
                <TabsTrigger value="images">Images</TabsTrigger>
                <TabsTrigger value="schema">Schema</TabsTrigger>
              </TabsList>

              {/* SUMMARY TAB */}
              <TabsContent value="summary" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="border-l-4 border-l-red-500">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg text-red-700 flex items-center"><XCircle className="w-5 h-5 mr-2"/> Critical Issues</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <span className="text-4xl font-bold text-red-600">{report.summary.critical.length}</span>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-l-yellow-500">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg text-yellow-700 flex items-center"><AlertTriangle className="w-5 h-5 mr-2"/> Warnings</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <span className="text-4xl font-bold text-yellow-600">{report.summary.warnings.length}</span>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-l-blue-500">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg text-blue-700 flex items-center"><Activity className="w-5 h-5 mr-2"/> Recommendations</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <span className="text-4xl font-bold text-blue-600">{report.summary.recommendations.length}</span>
                    </CardContent>
                  </Card>
                </div>

                {report.summary.critical.length > 0 && (
                  <Alert variant="destructive">
                    <XCircle className="h-4 w-4" />
                    <AlertTitle>Critical Action Required</AlertTitle>
                    <AlertDescription>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        {report.summary.critical.map((item, idx) => <li key={idx}>{item}</li>)}
                      </ul>
                    </AlertDescription>
                  </Alert>
                )}

                {report.summary.warnings.length > 0 && (
                  <Alert className="border-yellow-200 bg-yellow-50 text-yellow-800">
                    <AlertTriangle className="h-4 w-4 text-yellow-600" />
                    <AlertTitle className="text-yellow-800">Warnings to Review</AlertTitle>
                    <AlertDescription>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-yellow-700">
                        {report.summary.warnings.map((item, idx) => <li key={idx}>{item}</li>)}
                      </ul>
                    </AlertDescription>
                  </Alert>
                )}

                <Card>
                  <CardHeader>
                    <CardTitle>Optimization Recommendations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {report.summary.recommendations.map((rec, idx) => (
                        <li key={idx} className="flex gap-3 text-gray-700">
                          <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* META TAGS TAB */}
              <TabsContent value="meta">
                <Card>
                  <CardHeader>
                    <CardTitle>Meta Tags & Head Elements Analysis</CardTitle>
                    <CardDescription>Evaluation of Title tags, Meta Descriptions, and Open Graph configurations based on seoMetadata.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm text-left">
                        <thead className="bg-gray-50 border-b">
                          <tr>
                            <th className="px-4 py-3 font-medium text-gray-600">Page</th>
                            <th className="px-4 py-3 font-medium text-gray-600">Title Analysis</th>
                            <th className="px-4 py-3 font-medium text-gray-600">Description Analysis</th>
                            <th className="px-4 py-3 font-medium text-gray-600">Open Graph</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          {report.metaTags.items.map((item, idx) => (
                            <tr key={idx} className="hover:bg-gray-50">
                              <td className="px-4 py-4 font-medium">{item.page}</td>
                              <td className="px-4 py-4">
                                <div className="flex items-start gap-2">
                                  <StatusIcon status={item.titleStatus} />
                                  <div>
                                    <p className="line-clamp-1">{item.title}</p>
                                    <p className="text-xs text-gray-500">{item.titleMessage}</p>
                                  </div>
                                </div>
                              </td>
                              <td className="px-4 py-4">
                                <div className="flex items-start gap-2">
                                  <StatusIcon status={item.descStatus} />
                                  <div>
                                    <p className="line-clamp-2 max-w-xs">{item.description}</p>
                                    <p className="text-xs text-gray-500">{item.descMessage}</p>
                                  </div>
                                </div>
                              </td>
                              <td className="px-4 py-4">
                                {item.hasOgImage ? (
                                  <Badge className="bg-green-100 text-green-800 border-green-200 hover:bg-green-100">Valid</Badge>
                                ) : (
                                  <Badge variant="destructive">Missing</Badge>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* HEADINGS TAB */}
              <TabsContent value="headings">
                <Card>
                  <CardHeader>
                    <CardTitle>Heading Structure Analysis (Current DOM)</CardTitle>
                    <CardDescription>Checks for exactly one H1 tag and proper semantic flow.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {report.headings.items.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-4 p-4 rounded-lg border bg-gray-50">
                          <StatusIcon status={item.status} />
                          <div>
                            <h4 className="font-semibold">{item.page}</h4>
                            <p className="text-sm text-gray-600">{item.message}</p>
                            {item.h1Text && <p className="text-sm text-gray-500 mt-1 italic">H1: "{item.h1Text}"</p>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* TECHNICAL TAB */}
              <TabsContent value="tech">
                <Card>
                  <CardHeader>
                    <CardTitle>Technical SEO & URL Structure</CardTitle>
                    <CardDescription>Sitemap, Robots.txt, and URL parameters analysis.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h3 className="font-semibold mb-4 text-lg border-b pb-2">Core Files</h3>
                    <div className="grid gap-4 mb-8">
                      {report.technical.items.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 bg-white border rounded-lg shadow-sm">
                          <StatusIcon status={item.status} />
                          <span className="font-medium min-w-[120px]">{item.check}</span>
                          <span className="text-gray-600">{item.message}</span>
                        </div>
                      ))}
                    </div>

                    <h3 className="font-semibold mb-4 text-lg border-b pb-2">URL Structure</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm text-left border">
                        <thead className="bg-gray-50 border-b">
                          <tr>
                            <th className="px-4 py-2">Page</th>
                            <th className="px-4 py-2">URL</th>
                            <th className="px-4 py-2">Status</th>
                            <th className="px-4 py-2">Details</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          {report.urlStructure.items.map((item, idx) => (
                            <tr key={idx}>
                              <td className="px-4 py-2 font-medium">{item.page}</td>
                              <td className="px-4 py-2 text-gray-500">{item.url}</td>
                              <td className="px-4 py-2"><StatusIcon status={item.status} /></td>
                              <td className="px-4 py-2">{item.message}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* IMAGES TAB */}
              <TabsContent value="images">
                <Card>
                  <CardHeader>
                    <CardTitle>Images & Media Analysis (Current DOM)</CardTitle>
                    <CardDescription>Auditing alt tags, descriptive names, and performance indicators.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {report.images.items.map((item, idx) => (
                        <div key={idx} className="flex flex-col md:flex-row items-center gap-4 p-4 rounded-lg border">
                          <div className="p-3 bg-blue-50 text-blue-600 rounded-full">
                            <Activity className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold">Current View ({item.page})</h4>
                            <p className="text-sm text-gray-600">Total Images Found: {item.totalImages}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <StatusIcon status={item.status} />
                            <span className={item.status === 'pass' ? 'text-green-600' : 'text-yellow-600 font-medium'}>
                              {item.message}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* SCHEMA TAB */}
              <TabsContent value="schema">
                <Card>
                  <CardHeader>
                    <CardTitle>Structured Data (Schema.org)</CardTitle>
                    <CardDescription>Verification of LocalBusiness, Service, and Organizational schemas.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {report.structuredData.items.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-4 border rounded-lg hover:shadow-sm transition-shadow">
                          <StatusIcon status={item.status} />
                          <div>
                            <h4 className="font-semibold">{item.schema} Schema</h4>
                            <p className="text-sm text-gray-600">{item.message}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

            </Tabs>
          )}

        </div>
      </div>
    </>
  );
};

export default SEOAuditReportPage;
