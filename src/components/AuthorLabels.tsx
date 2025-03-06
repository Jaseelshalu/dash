import * as React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from './ui/input';
import { Avatar } from './ui/avatar';

const AuthorLabels = () => {
    const labels = [
        { role: 'Author', instances: 5 },
        { role: 'Translator', instances: 5 },
        { role: 'Interviewer', instances: 5 },
        { role: 'Interviewee', instances: 5 },
        { role: 'Author', instances: 5 },
        { role: 'Custom Label', instances: 0 }
    ];

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>author Labels</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {labels.map((label, index) => (
                        <div key={index} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Avatar className="h-8 w-8 bg-red-800" />
                                <div className="font-medium">
                                    {index === labels.length - 1 ? (
                                        <Input className="h-8" placeholder="Add custom label" />
                                    ) : (
                                        label.role
                                    )}
                                </div>
                            </div>
                            <div className="text-gray-500">{label.instances} Instaces</div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}

export default AuthorLabels
