import React, { useState } from 'react';
import { Server, Database, Cpu, Network, Box, HardDrive, Shield, Settings, Cloud, GitBranch, ArrowRight, CheckCircle } from 'lucide-react';

const KubernetesArchitecture = () => {
  const [activeTab, setActiveTab] = useState('architecture');

  return (
    <div className="w-full max-w-7xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Kubernetes Architecture & Flow</h1>
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'architecture'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            Architecture
          </button>
          <button
            onClick={() => setActiveTab('workflow')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'workflow'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            Deployment Flow
          </button>
          <button
            onClick={() => setActiveTab('communication')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'communication'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            Communication
          </button>
        </div>
      </div>

      {activeTab === 'architecture' && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Kubernetes Cluster Architecture</h2>
          
          {/* Control Plane */}
          <div className="border-4 border-purple-500 rounded-lg p-6 mb-6 bg-purple-50">
            <h3 className="text-xl font-bold text-purple-700 mb-4 flex items-center gap-2">
              <Cloud className="w-6 h-6" />
              Control Plane (Master Node)
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center gap-2 mb-2">
                  <Server className="w-5 h-5 text-purple-600" />
                  <h4 className="font-semibold text-gray-800">API Server</h4>
                </div>
                <p className="text-sm text-gray-600">Central management, exposes K8s API</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center gap-2 mb-2">
                  <Database className="w-5 h-5 text-purple-600" />
                  <h4 className="font-semibold text-gray-800">etcd</h4>
                </div>
                <p className="text-sm text-gray-600">Cluster state & configuration store</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center gap-2 mb-2">
                  <Cpu className="w-5 h-5 text-purple-600" />
                  <h4 className="font-semibold text-gray-800">Scheduler</h4>
                </div>
                <p className="text-sm text-gray-600">Assigns Pods to Nodes</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center gap-2 mb-2">
                  <Settings className="w-5 h-5 text-purple-600" />
                  <h4 className="font-semibold text-gray-800">Controller Manager</h4>
                </div>
                <p className="text-sm text-gray-600">Maintains desired state</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center gap-2 mb-2">
                  <Cloud className="w-5 h-5 text-purple-600" />
                  <h4 className="font-semibold text-gray-800">Cloud Controller</h4>
                </div>
                <p className="text-sm text-gray-600">Cloud provider integration</p>
              </div>
            </div>
          </div>

          {/* Worker Nodes */}
          <div className="grid md:grid-cols-2 gap-4">
            {[1, 2].map((nodeNum) => (
              <div key={nodeNum} className="border-4 border-green-500 rounded-lg p-6 bg-green-50">
                <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center gap-2">
                  <Server className="w-6 h-6" />
                  Worker Node {nodeNum}
                </h3>
                
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg shadow">
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <h4 className="font-semibold text-gray-800 text-sm">Kubelet</h4>
                    </div>
                    <p className="text-xs text-gray-600">Node agent, manages Pods</p>
                  </div>
                  
                  <div className="bg-white p-3 rounded-lg shadow">
                    <div className="flex items-center gap-2 mb-1">
                      <Network className="w-4 h-4 text-green-600" />
                      <h4 className="font-semibold text-gray-800 text-sm">Kube-proxy</h4>
                    </div>
                    <p className="text-xs text-gray-600">Network rules, load balancing</p>
                  </div>
                  
                  <div className="bg-white p-3 rounded-lg shadow">
                    <div className="flex items-center gap-2 mb-1">
                      <Box className="w-4 h-4 text-green-600" />
                      <h4 className="font-semibold text-gray-800 text-sm">Container Runtime</h4>
                    </div>
                    <p className="text-xs text-gray-600">Docker/containerd</p>
                  </div>

                  {/* Pods */}
                  <div className="border-2 border-blue-400 rounded-lg p-3 bg-blue-50">
                    <h4 className="font-semibold text-blue-700 text-sm mb-2">Pods</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {[1, 2].map((podNum) => (
                        <div key={podNum} className="bg-white p-2 rounded border border-blue-300">
                          <div className="flex items-center gap-1 mb-1">
                            <Box className="w-3 h-3 text-blue-600" />
                            <span className="text-xs font-medium">Pod {podNum}</span>
                          </div>
                          <div className="text-xs text-gray-500">Container(s)</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'workflow' && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Deployment Workflow</h2>
          
          <div className="space-y-4">
            {[
              { step: 1, title: "User submits deployment", desc: "kubectl apply -f deployment.yaml", icon: <GitBranch className="w-6 h-6" /> },
              { step: 2, title: "API Server receives request", desc: "Validates and stores in etcd", icon: <Server className="w-6 h-6" /> },
              { step: 3, title: "Controller Manager detects change", desc: "Creates ReplicaSet and Pods", icon: <Settings className="w-6 h-6" /> },
              { step: 4, title: "Scheduler assigns Pods to Nodes", desc: "Based on resources and constraints", icon: <Cpu className="w-6 h-6" /> },
              { step: 5, title: "Kubelet creates containers", desc: "Pulls images and starts containers", icon: <Box className="w-6 h-6" /> },
              { step: 6, title: "Kube-proxy configures networking", desc: "Sets up service endpoints and rules", icon: <Network className="w-6 h-6" /> },
              { step: 7, title: "Application is running", desc: "Pods are ready and serving traffic", icon: <CheckCircle className="w-6 h-6" /> }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  {item.step}
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                    {item.icon}
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mt-1">{item.desc}</p>
                </div>
                {idx < 6 && (
                  <ArrowRight className="w-6 h-6 text-blue-600 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'communication' && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Component Communication</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">User → API Server</h3>
              <p className="text-gray-600">kubectl commands communicate with API Server via REST API (HTTPS)</p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4 py-2">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">API Server → etcd</h3>
              <p className="text-gray-600">API Server is the only component that directly communicates with etcd to read/write cluster state</p>
            </div>

            <div className="border-l-4 border-green-500 pl-4 py-2">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Scheduler/Controller → API Server</h3>
              <p className="text-gray-600">Watch for changes and update resources through API Server</p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Kubelet → API Server</h3>
              <p className="text-gray-600">Reports node status and receives Pod specifications</p>
            </div>

            <div className="border-l-4 border-red-500 pl-4 py-2">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Kubelet → Container Runtime</h3>
              <p className="text-gray-600">Creates and manages containers using CRI (Container Runtime Interface)</p>
            </div>

            <div className="border-l-4 border-indigo-500 pl-4 py-2">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Pod → Pod Communication</h3>
              <p className="text-gray-600">Via cluster network (CNI plugin), each Pod has unique IP address</p>
            </div>

            <div className="border-l-4 border-teal-500 pl-4 py-2">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">External Traffic → Service</h3>
              <p className="text-gray-600">Through Ingress or LoadBalancer, kube-proxy routes to appropriate Pods</p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
            <h3 className="font-semibold text-yellow-800 mb-2">Key Point:</h3>
            <p className="text-yellow-700">All control plane components communicate through the API Server. It's the central hub for all cluster operations.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default KubernetesArchitecture;