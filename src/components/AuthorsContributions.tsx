import * as React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AuthorsContributionsList = [
    {
        id: '123',
        name: "AJNAN",
        contributions: "6",
    },
    {
        id: '456',
        name: "THOUFEEQUE",
        contributions: "3",
    },
    {
        id: '789',
        name: "JASEEL",
        contributions: "0",
    }
]

const AuthorsContributions = () => {
  return (
    <div>
      <Card className="w-full">
      <CardHeader>
        <CardTitle>Author Contributions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {AuthorsContributionsList.map((author) => (
            <div key={author.id} className="flex items-center justify-between">
              <div className="font-medium">{author.name}</div>
              <div className="text-gray-500">{author.contributions} Contributions</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
    </div>
  )
}

export default AuthorsContributions
