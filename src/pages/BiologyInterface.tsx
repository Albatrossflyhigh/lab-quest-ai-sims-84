
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import SiteHeader from '@/components/layout/SiteHeader';
import { 
  Microscope, 
  BookOpen, 
  Search, 
  Play, 
  RotateCcw, 
  ZoomIn, 
  ZoomOut,
  Save,
  Download,
  Share2,
  Eye,
  Layers,
  Settings,
  ChevronRight,
  Dna,
  Heart,
  Brain,
  Leaf
} from 'lucide-react';

const BiologyInterface = () => {
  const [selectedConcept, setSelectedConcept] = useState('cell-structure');
  const [searchTerm, setSearchTerm] = useState('');
  const [notebookEntries, setNotebookEntries] = useState([
    {
      id: 1,
      title: 'Cell Membrane Observations',
      content: 'The phospholipid bilayer shows selective permeability...',
      date: '2024-01-15',
      tags: ['membrane', 'permeability']
    }
  ]);
  const [newEntry, setNewEntry] = useState({ title: '', content: '' });

  const concepts = [
    {
      id: 'cell-structure',
      title: 'Cell Structure',
      description: 'Explore organelles and cellular components',
      icon: Microscope,
      color: 'bg-gradient-to-r from-blue-500 to-cyan-500',
      topics: ['Nucleus', 'Mitochondria', 'Ribosomes', 'Endoplasmic Reticulum']
    },
    {
      id: 'genetics',
      title: 'Genetics & DNA',
      description: 'Understand heredity and molecular biology',
      icon: Dna,
      color: 'bg-gradient-to-r from-purple-500 to-pink-500',
      topics: ['DNA Structure', 'Gene Expression', 'Mutations', 'Inheritance']
    },
    {
      id: 'physiology',
      title: 'Human Physiology',
      description: 'Learn about body systems and functions',
      icon: Heart,
      color: 'bg-gradient-to-r from-red-500 to-orange-500',
      topics: ['Circulatory System', 'Nervous System', 'Respiratory System', 'Digestive System']
    },
    {
      id: 'ecology',
      title: 'Ecology',
      description: 'Study ecosystems and environmental interactions',
      icon: Leaf,
      color: 'bg-gradient-to-r from-green-500 to-emerald-500',
      topics: ['Food Webs', 'Biodiversity', 'Climate Change', 'Conservation']
    }
  ];

  const addNotebookEntry = () => {
    if (newEntry.title && newEntry.content) {
      const entry = {
        id: Date.now(),
        title: newEntry.title,
        content: newEntry.content,
        date: new Date().toISOString().split('T')[0],
        tags: []
      };
      setNotebookEntries([entry, ...notebookEntries]);
      setNewEntry({ title: '', content: '' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 transition-all duration-500">
      <SiteHeader />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 dark:from-blue-800/30 dark:via-purple-800/30 dark:to-cyan-800/30 py-16">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] dark:bg-grid-white/[0.05]" />
        <div className="container relative">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 dark:from-blue-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent mb-4">
              🧬 Biology Explorer
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Interactive learning platform for modern biology education with 3D visualizations and research tools
            </p>
          </div>
        </div>
      </div>

      <div className="container py-8">
        <Tabs defaultValue="explorer" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg border border-white/30 dark:border-slate-700/50 rounded-2xl p-2">
            <TabsTrigger value="explorer" className="rounded-xl data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700 data-[state=active]:shadow-lg transition-all data-[state=active]:text-slate-900 dark:data-[state=active]:text-white">
              Concept Explorer
            </TabsTrigger>
            <TabsTrigger value="3d-viewer" className="rounded-xl data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700 data-[state=active]:shadow-lg transition-all data-[state=active]:text-slate-900 dark:data-[state=active]:text-white">
              3D Cell Viewer
            </TabsTrigger>
            <TabsTrigger value="diagrams" className="rounded-xl data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700 data-[state=active]:shadow-lg transition-all data-[state=active]:text-slate-900 dark:data-[state=active]:text-white">
              Interactive Diagrams
            </TabsTrigger>
            <TabsTrigger value="notebook" className="rounded-xl data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700 data-[state=active]:shadow-lg transition-all data-[state=active]:text-slate-900 dark:data-[state=active]:text-white">
              Research Notebook
            </TabsTrigger>
          </TabsList>

          {/* Concept Explorer */}
          <TabsContent value="explorer" className="space-y-6">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Concept Categories */}
              <div className="lg:w-1/3 space-y-4">
                <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg border-white/30 dark:border-slate-700/50 shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-slate-800 dark:text-white">
                      <Search className="h-5 w-5" />
                      Explore Concepts
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Input 
                      placeholder="Search biology topics..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="bg-white/70 dark:bg-slate-700/70 border-white/40 dark:border-slate-600/50 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400"
                    />
                    <div className="space-y-3">
                      {concepts.map((concept) => (
                        <Card 
                          key={concept.id}
                          className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                            selectedConcept === concept.id 
                              ? 'ring-2 ring-blue-500 dark:ring-blue-400 shadow-lg' 
                              : ''
                          } bg-white/60 dark:bg-slate-800/60 border-white/40 dark:border-slate-700/50 hover:bg-white/80 dark:hover:bg-slate-700/80`}
                          onClick={() => setSelectedConcept(concept.id)}
                        >
                          <CardContent className="p-4">
                            <div className="flex items-center gap-3 mb-3">
                              <div className={`p-2 rounded-lg ${concept.color} text-white shadow-md`}>
                                <concept.icon className="h-5 w-5" />
                              </div>
                              <div>
                                <h3 className="font-semibold text-slate-800 dark:text-white">{concept.title}</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-300">{concept.description}</p>
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {concept.topics.slice(0, 2).map((topic) => (
                                <Badge key={topic} variant="secondary" className="text-xs bg-slate-100/80 dark:bg-slate-700/80 text-slate-700 dark:text-slate-300">
                                  {topic}
                                </Badge>
                              ))}
                              {concept.topics.length > 2 && (
                                <Badge variant="secondary" className="text-xs bg-slate-100/80 dark:bg-slate-700/80 text-slate-700 dark:text-slate-300">
                                  +{concept.topics.length - 2} more
                                </Badge>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Selected Concept Details */}
              <div className="lg:w-2/3">
                <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg border-white/30 dark:border-slate-700/50 shadow-xl h-full">
                  <CardHeader>
                    <CardTitle className="text-slate-800 dark:text-white">
                      {concepts.find(c => c.id === selectedConcept)?.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {concepts.find(c => c.id === selectedConcept)?.topics.map((topic) => (
                        <Card key={topic} className="bg-gradient-to-br from-white/60 to-slate-50/60 dark:from-slate-700/60 dark:to-slate-800/60 border-white/40 dark:border-slate-600/50 hover:shadow-lg transition-all cursor-pointer group hover:from-white/80 dark:hover:from-slate-600/80">
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium text-slate-800 dark:text-white">{topic}</h4>
                              <ChevronRight className="h-4 w-4 text-slate-500 dark:text-slate-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors" />
                            </div>
                            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
                              Explore detailed information about {topic.toLowerCase()}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* 3D Cell Viewer */}
          <TabsContent value="3d-viewer" className="space-y-6">
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg border-white/30 dark:border-slate-700/50 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-slate-800 dark:text-white">
                  <span className="flex items-center gap-2">
                    <Microscope className="h-5 w-5" />
                    3D Cell Visualization
                  </span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="bg-white/60 dark:bg-slate-700/60 border-white/40 dark:border-slate-600/50 hover:bg-white/80 dark:hover:bg-slate-600/80">
                      <RotateCcw className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="bg-white/60 dark:bg-slate-700/60 border-white/40 dark:border-slate-600/50 hover:bg-white/80 dark:hover:bg-slate-600/80">
                      <ZoomIn className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="bg-white/60 dark:bg-slate-700/60 border-white/40 dark:border-slate-600/50 hover:bg-white/80 dark:hover:bg-slate-600/80">
                      <ZoomOut className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="bg-white/60 dark:bg-slate-700/60 border-white/40 dark:border-slate-600/50 hover:bg-white/80 dark:hover:bg-slate-600/80">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  {/* 3D Viewer */}
                  <div className="lg:col-span-3">
                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-slate-700 dark:to-slate-800 rounded-2xl flex items-center justify-center border border-white/40 dark:border-slate-600/50 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-600/40 dark:to-purple-600/40" />
                      <div className="relative z-10 text-center">
                        <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4 mx-auto animate-pulse shadow-lg">
                          <Microscope className="h-12 w-12 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-200 mb-2">3D Cell Model</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">Interactive cellular structure visualization</p>
                        <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg">
                          <Play className="h-4 w-4 mr-2" />
                          Start 3D Tour
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Controls Panel */}
                  <div className="space-y-4">
                    <Card className="bg-white/60 dark:bg-slate-700/60 border-white/40 dark:border-slate-600/50">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm text-slate-800 dark:text-white">
                          <Layers className="h-4 w-4 inline mr-2" />
                          Cell Components
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        {['Nucleus', 'Mitochondria', 'Ribosomes', 'ER', 'Golgi', 'Lysosomes'].map((component) => (
                          <div key={component} className="flex items-center justify-between">
                            <span className="text-sm text-slate-700 dark:text-slate-300">{component}</span>
                            <Button variant="ghost" size="sm" className="h-6 w-6 p-0 hover:bg-slate-100 dark:hover:bg-slate-600">
                              <Eye className="h-3 w-3" />
                            </Button>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Interactive Diagrams */}
          <TabsContent value="diagrams" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Photosynthesis Pathway', color: 'from-green-500 to-emerald-500', icon: Leaf },
                { title: 'Cell Division Process', color: 'from-blue-500 to-cyan-500', icon: Microscope },
                { title: 'Neural Network', color: 'from-purple-500 to-pink-500', icon: Brain },
                { title: 'Cardiovascular System', color: 'from-red-500 to-orange-500', icon: Heart }
              ].map((diagram) => (
                <Card key={diagram.title} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg border-white/30 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 rounded-2xl flex items-center justify-center mb-4 relative overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-r ${diagram.color} opacity-20 dark:opacity-30`} />
                      <div className={`w-16 h-16 bg-gradient-to-r ${diagram.color} rounded-full flex items-center justify-center shadow-lg`}>
                        <diagram.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-slate-800 dark:text-white mb-2">{diagram.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                      Interactive diagram with step-by-step exploration
                    </p>
                    <Button className="w-full bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 dark:from-slate-500 dark:to-slate-600 dark:hover:from-slate-400 dark:hover:to-slate-500 text-white shadow-md">
                      Explore Diagram
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Research Notebook */}
          <TabsContent value="notebook" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* New Entry Form */}
              <div className="lg:col-span-1">
                <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg border-white/30 dark:border-slate-700/50 shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-slate-800 dark:text-white">
                      <BookOpen className="h-5 w-5" />
                      New Entry
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Input 
                      placeholder="Entry title..."
                      value={newEntry.title}
                      onChange={(e) => setNewEntry({...newEntry, title: e.target.value})}
                      className="bg-white/70 dark:bg-slate-700/70 border-white/40 dark:border-slate-600/50 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400"
                    />
                    <Textarea 
                      placeholder="Your observations and notes..."
                      value={newEntry.content}
                      onChange={(e) => setNewEntry({...newEntry, content: e.target.value})}
                      rows={6}
                      className="bg-white/70 dark:bg-slate-700/70 border-white/40 dark:border-slate-600/50 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400"
                    />
                    <Button 
                      onClick={addNotebookEntry}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-md"
                    >
                      <Save className="h-4 w-4 mr-2" />
                      Save Entry
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Notebook Entries */}
              <div className="lg:col-span-2">
                <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg border-white/30 dark:border-slate-700/50 shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between text-slate-800 dark:text-white">
                      <span>Research Notes</span>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="bg-white/60 dark:bg-slate-700/60 border-white/40 dark:border-slate-600/50 hover:bg-white/80 dark:hover:bg-slate-600/80">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="bg-white/60 dark:bg-slate-700/60 border-white/40 dark:border-slate-600/50 hover:bg-white/80 dark:hover:bg-slate-600/80">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 max-h-96 overflow-y-auto">
                    {notebookEntries.map((entry) => (
                      <Card key={entry.id} className="bg-white/60 dark:bg-slate-700/60 border-white/40 dark:border-slate-600/50">
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-medium text-slate-800 dark:text-white">{entry.title}</h4>
                            <span className="text-xs text-slate-500 dark:text-slate-400">{entry.date}</span>
                          </div>
                          <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">{entry.content}</p>
                          <div className="flex gap-1">
                            {entry.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs bg-slate-100/80 dark:bg-slate-700/80 text-slate-700 dark:text-slate-300">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BiologyInterface;
