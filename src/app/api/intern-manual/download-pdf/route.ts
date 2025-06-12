import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Define the slides data
    const slides = [
      {
        id: 'title_slide',
        title: 'Moneybird Manual for Interns',
        content: `
          <h1>Moneybird Manual for Interns</h1>
          <h2>Glodinas Finance B.V.</h2>
          <p>A comprehensive step-by-step guide to mastering Moneybird accounting software.</p>
          <p>Perfect for new interns at Glodinas Finance B.V.</p>
        `
      },
      {
        id: 'welcome_intro',
        title: 'Welcome & Introduction',
        content: `
          <h1>Welcome & Introduction</h1>
          <h2>Welcome to Your Moneybird Journey!</h2>
          <p>As a new intern at Glodinas Finance B.V., you're about to learn one of the most important tools in modern accounting.</p>
          <h3>What You'll Master:</h3>
          <ul>
            <li>Navigate Moneybird with confidence</li>
            <li>Create professional invoices</li>
            <li>Manage client relationships</li>
            <li>Track expenses accurately</li>
            <li>Generate meaningful reports</li>
            <li>Apply best practices</li>
          </ul>
        `
      },
      {
        id: 'what_is_moneybird',
        title: 'What is Moneybird?',
        content: `
          <h1>What is Moneybird?</h1>
          <h2>Your Complete Accounting Solution</h2>
          <p>Moneybird is a comprehensive online accounting platform designed specifically for entrepreneurs and small to medium-sized businesses.</p>
          <h3>Key Features:</h3>
          <ul>
            <li><strong>Invoice Management:</strong> Create, send, and track professional invoices</li>
            <li><strong>Expense Tracking:</strong> Record and categorize all business expenses</li>
            <li><strong>Financial Reporting:</strong> Generate detailed financial reports</li>
            <li><strong>VAT Compliance:</strong> Automatic VAT calculations and reporting</li>
            <li><strong>Bank Integration:</strong> Connect your bank accounts for automatic transaction import</li>
            <li><strong>Client Management:</strong> Maintain detailed client and supplier databases</li>
          </ul>
        `
      },
      {
        id: 'getting_started',
        title: 'Getting Started - Login & Navigation',
        content: `
          <h1>Getting Started</h1>
          <h2>Login Process & Navigation Basics</h2>
          <h3>Logging In:</h3>
          <ol>
            <li>Navigate to www.moneybird.com</li>
            <li>Click "Inloggen" (Login)</li>
            <li>Enter your credentials provided by your supervisor</li>
            <li>Select the correct administration if you have access to multiple</li>
          </ol>
          <h3>Main Navigation Areas:</h3>
          <ul>
            <li><strong>Dashboard:</strong> Overview of your financial status</li>
            <li><strong>Verkoop (Sales):</strong> Invoices, quotes, and customer management</li>
            <li><strong>Inkoop (Purchase):</strong> Supplier invoices and expense management</li>
            <li><strong>Financieel (Financial):</strong> Bank accounts and financial overview</li>
            <li><strong>Rapporten (Reports):</strong> All financial reports and analytics</li>
          </ul>
        `
      },
      {
        id: 'creating_invoice',
        title: 'Creating Your First Invoice',
        content: `
          <h1>Creating Your First Invoice</h1>
          <h2>Step-by-Step Invoice Creation</h2>
          <h3>Step 1: Navigate to Sales</h3>
          <p>Click on "Verkoop" in the main menu, then select "Facturen" (Invoices)</p>
          <h3>Step 2: Create New Invoice</h3>
          <p>Click the "Nieuwe factuur" (New Invoice) button</p>
          <h3>Step 3: Fill in Client Information</h3>
          <ul>
            <li>Select existing client or create new one</li>
            <li>Verify contact details are correct</li>
            <li>Set invoice date and due date</li>
          </ul>
          <h3>Step 4: Add Products/Services</h3>
          <ul>
            <li>Add line items for products or services</li>
            <li>Include descriptions, quantities, and prices</li>
            <li>Verify VAT rates are correct</li>
          </ul>
          <h3>Step 5: Review and Send</h3>
          <ul>
            <li>Review all information for accuracy</li>
            <li>Preview the invoice layout</li>
            <li>Send via email or download PDF</li>
          </ul>
        `
      },
      {
        id: 'managing_contacts',
        title: 'Managing Contacts',
        content: `
          <h1>Managing Contacts</h1>
          <h2>Building Your Client Database</h2>
          <h3>Adding New Contacts:</h3>
          <ol>
            <li>Navigate to "Verkoop" → "Relaties" (Contacts)</li>
            <li>Click "Nieuwe relatie" (New Contact)</li>
            <li>Fill in required information:
              <ul>
                <li>Company name</li>
                <li>Contact person</li>
                <li>Address details</li>
                <li>Email and phone</li>
                <li>VAT number (if applicable)</li>
              </ul>
            </li>
          </ol>
          <h3>Contact Categories:</h3>
          <ul>
            <li><strong>Klanten (Customers):</strong> Companies you invoice</li>
            <li><strong>Leveranciers (Suppliers):</strong> Companies you purchase from</li>
            <li><strong>Beide (Both):</strong> Contacts that are both customers and suppliers</li>
          </ul>
          <h3>Best Practices:</h3>
          <ul>
            <li>Always verify VAT numbers for business clients</li>
            <li>Keep contact information up to date</li>
            <li>Use clear, consistent naming conventions</li>
          </ul>
        `
      },
      {
        id: 'recording_expenses',
        title: 'Recording Expenses',
        content: `
          <h1>Recording Expenses</h1>
          <h2>Tracking Business Expenses</h2>
          <h3>Types of Expenses:</h3>
          <ul>
            <li><strong>Purchase Invoices:</strong> Bills from suppliers</li>
            <li><strong>Receipts:</strong> Small purchases and cash expenses</li>
            <li><strong>Bank Transactions:</strong> Direct debits and transfers</li>
          </ul>
          <h3>Recording Purchase Invoices:</h3>
          <ol>
            <li>Go to "Inkoop" → "Inkoopfacturen"</li>
            <li>Click "Nieuwe inkoopfactuur"</li>
            <li>Select or create supplier</li>
            <li>Enter invoice details and amounts</li>
            <li>Categorize expenses correctly</li>
            <li>Upload invoice document</li>
          </ol>
          <h3>Important Categories:</h3>
          <ul>
            <li>Office supplies</li>
            <li>Travel expenses</li>
            <li>Professional services</li>
            <li>Utilities</li>
            <li>Marketing costs</li>
          </ul>
        `
      },
      {
        id: 'basic_reporting',
        title: 'Basic Reporting',
        content: `
          <h1>Basic Reporting</h1>
          <h2>Understanding Your Financial Data</h2>
          <h3>Key Reports:</h3>
          <ul>
            <li><strong>Profit & Loss:</strong> Income vs expenses overview</li>
            <li><strong>VAT Report:</strong> VAT obligations and payments</li>
            <li><strong>Outstanding Invoices:</strong> Unpaid customer invoices</li>
            <li><strong>Customer Report:</strong> Revenue breakdown by client</li>
          </ul>
          <h3>Accessing Reports:</h3>
          <ol>
            <li>Navigate to "Rapporten" in main menu</li>
            <li>Select desired report type</li>
            <li>Set date range and filters</li>
            <li>Generate and review report</li>
          </ol>
          <h3>Export Options:</h3>
          <ul>
            <li><strong>PDF:</strong> Professional formatted reports</li>
            <li><strong>Excel:</strong> Detailed data for analysis</li>
            <li><strong>Email:</strong> Schedule automatic delivery</li>
          </ul>
        `
      },
      {
        id: 'tips_best_practices',
        title: 'Tips & Best Practices',
        content: `
          <h1>Tips & Best Practices</h1>
          <h2>Working Efficiently in Moneybird</h2>
          <h3>Daily Best Practices:</h3>
          <ul>
            <li>Process invoices and expenses daily</li>
            <li>Reconcile bank transactions weekly</li>
            <li>Review outstanding invoices regularly</li>
            <li>Keep digital copies of all documents</li>
          </ul>
          <h3>Common Mistakes to Avoid:</h3>
          <ul>
            <li>Incorrect VAT rate selection</li>
            <li>Missing or incomplete contact information</li>
            <li>Delayed expense recording</li>
            <li>Not backing up important data</li>
          </ul>
          <h3>Efficiency Tips:</h3>
          <ul>
            <li>Use keyboard shortcuts</li>
            <li>Set up recurring invoices for regular clients</li>
            <li>Create templates for common transactions</li>
            <li>Use batch processing for similar items</li>
          </ul>
          <h3>When to Ask for Help:</h3>
          <ul>
            <li>Unusual transactions you're unsure about</li>
            <li>Error messages you don't understand</li>
            <li>Discrepancies in financial reports</li>
            <li>Questions about VAT compliance</li>
          </ul>
        `
      },
      {
        id: 'basic_accounting_terms',
        title: 'Basic Accounting Terms',
        content: `
          <h1>Basic Accounting Terms</h1>
          <h2>Essential Concepts for Moneybird Users</h2>
          <h3>Key Terms:</h3>
          <ul>
            <li><strong>Accounts Payable (AP):</strong> Money your company owes to suppliers</li>
            <li><strong>Accounts Receivable (AR):</strong> Money owed to your company by customers</li>
            <li><strong>Revenue:</strong> Total income generated from sales</li>
            <li><strong>Expenses:</strong> Costs incurred in generating revenue</li>
            <li><strong>Profit & Loss (P&L):</strong> Statement showing revenues, costs, and expenses</li>
            <li><strong>Balance Sheet:</strong> Snapshot of company's assets, liabilities, and equity</li>
            <li><strong>VAT:</strong> Value Added Tax - consumption tax added at each stage</li>
            <li><strong>Journal Entry:</strong> First step in accounting where transactions are recorded</li>
            <li><strong>Reconciliation:</strong> Comparing records to ensure accuracy</li>
            <li><strong>Trial Balance:</strong> Worksheet showing all ledger balances</li>
          </ul>
        `
      },
      {
        id: 'understanding_documents',
        title: 'Understanding Financial Documents',
        content: `
          <h1>Understanding Financial Documents</h1>
          <h2>Types of Documents in Moneybird</h2>
          <h3>Sales Documents:</h3>
          <ul>
            <li><strong>Sales Invoice:</strong> Bill sent to customers for goods/services provided</li>
            <li><strong>Quote:</strong> Proposal for potential work or sales</li>
            <li><strong>Credit Note:</strong> Document reducing the amount owed by customer</li>
          </ul>
          <h3>Purchase Documents:</h3>
          <ul>
            <li><strong>Purchase Invoice:</strong> Bill received from suppliers</li>
            <li><strong>Receipt:</strong> Proof of payment for goods/services</li>
          </ul>
          <h3>Document Workflow:</h3>
          <ol>
            <li><strong>Quote:</strong> Initial proposal to customer</li>
            <li><strong>Invoice:</strong> Formal request for payment</li>
            <li><strong>Payment:</strong> Customer pays the invoice</li>
            <li><strong>Receipt:</strong> Confirmation of payment received</li>
          </ol>
        `
      },
      {
        id: 'dutch_vat_basics',
        title: 'Dutch VAT Basics',
        content: `
          <h1>Dutch VAT Basics</h1>
          <h2>Understanding VAT in the Netherlands</h2>
          <h3>VAT Rates:</h3>
          <ul>
            <li><strong>21% (Standard Rate):</strong> Most goods and services</li>
            <li><strong>9% (Reduced Rate):</strong> Food, books, medicines, hotels</li>
            <li><strong>0% (Zero Rate):</strong> Exports, international transport</li>
          </ul>
          <h3>VAT Registration:</h3>
          <ul>
            <li>Mandatory if annual turnover exceeds €20,000</li>
            <li>Voluntary registration possible below threshold</li>
            <li>Registration with Dutch Tax Authority (Belastingdienst)</li>
          </ul>
          <h3>VAT Reporting:</h3>
          <ul>
            <li><strong>Quarterly:</strong> Most common reporting period</li>
            <li><strong>Monthly:</strong> For larger businesses</li>
            <li><strong>Annual:</strong> For very small businesses</li>
          </ul>
          <h3>Moneybird VAT Features:</h3>
          <ul>
            <li>Automatic VAT calculation</li>
            <li>VAT report generation</li>
            <li>Integration with tax authority systems</li>
            <li>VAT return preparation</li>
          </ul>
        `
      },
      {
        id: 'bank_reconciliation',
        title: 'Bank Reconciliation',
        content: `
          <h1>Bank Reconciliation</h1>
          <h2>Matching Bank Statements with Moneybird Records</h2>
          <h3>What is Bank Reconciliation?</h3>
          <p>Bank reconciliation is the process of comparing your company's bank statements with your internal financial records in Moneybird.</p>
          <h3>Steps in Moneybird:</h3>
          <ol>
            <li><strong>Import Bank Statements:</strong> Connect your bank account or import statements</li>
            <li><strong>Match Transactions:</strong> Moneybird suggests matches between bank transactions and invoices</li>
            <li><strong>Categorize Unmatched Items:</strong> Manually categorize transactions that don't auto-match</li>
            <li><strong>Review and Finalize:</strong> Check reconciliation summary and investigate differences</li>
          </ol>
          <h3>Benefits:</h3>
          <ul>
            <li>Detect errors and fraud</li>
            <li>Ensure accurate financial statements</li>
            <li>Identify missing transactions</li>
            <li>Maintain audit trail</li>
          </ul>
        `
      },
      {
        id: 'advanced_reporting',
        title: 'Advanced Reporting & Analysis',
        content: `
          <h1>Advanced Reporting & Analysis</h1>
          <h2>Unlocking Deeper Insights</h2>
          <h3>Advanced Features:</h3>
          <ul>
            <li><strong>Customizable Reports:</strong> Tailor reports to specific needs</li>
            <li><strong>Advanced Filtering:</strong> Drill down into specific data sets</li>
            <li><strong>Data Export:</strong> Export for external analysis tools</li>
            <li><strong>Integration Options:</strong> Connect with other business tools</li>
          </ul>
          <h3>Analysis Techniques:</h3>
          <ul>
            <li>Trend analysis over time periods</li>
            <li>Customer profitability analysis</li>
            <li>Expense category breakdown</li>
            <li>Cash flow forecasting</li>
          </ul>
          <h3>Business Intelligence:</h3>
          <ul>
            <li>Identify top-performing clients</li>
            <li>Track seasonal trends</li>
            <li>Monitor expense patterns</li>
            <li>Optimize pricing strategies</li>
          </ul>
        `
      },
      {
        id: 'resources_support',
        title: 'Resources & Support',
        content: `
          <h1>Resources & Support</h1>
          <h2>Where to Find Help</h2>
          <h3>Internal Support:</h3>
          <ul>
            <li><strong>Your Supervisor:</strong> First point of contact for questions</li>
            <li><strong>Finance Team:</strong> Experienced colleagues for complex issues</li>
            <li><strong>Company Documentation:</strong> Internal procedures and guidelines</li>
          </ul>
          <h3>Moneybird Resources:</h3>
          <ul>
            <li><strong>Help Center:</strong> helpcenter.moneybird.nl</li>
            <li><strong>Video Tutorials:</strong> Step-by-step guides</li>
            <li><strong>Customer Support:</strong> Direct assistance from Moneybird</li>
          </ul>
          <h3>Continuing Education:</h3>
          <ul>
            <li>Attend Moneybird webinars</li>
            <li>Join accounting forums and communities</li>
            <li>Stay updated with tax law changes</li>
            <li>Practice with sample data</li>
          </ul>
          <h3>Next Steps:</h3>
          <ul>
            <li>Complete hands-on practice exercises</li>
            <li>Shadow experienced team members</li>
            <li>Gradually take on more complex tasks</li>
            <li>Provide feedback on this training manual</li>
          </ul>
        `
      }
    ];

    // Create HTML content for PDF
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Moneybird Manual - Glodinas Finance B.V.</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 40px;
            color: #333;
          }
          .header {
            text-align: center;
            margin-bottom: 40px;
            padding-bottom: 20px;
            border-bottom: 2px solid #3b82f6;
          }
          .company-logo {
            font-size: 24px;
            font-weight: bold;
            color: #3b82f6;
            margin-bottom: 10px;
          }
          h1 {
            color: #1e40af;
            font-size: 28px;
            margin-bottom: 10px;
          }
          h2 {
            color: #3b82f6;
            font-size: 22px;
            margin-top: 30px;
            margin-bottom: 15px;
          }
          h3 {
            color: #1e40af;
            font-size: 18px;
            margin-top: 25px;
            margin-bottom: 10px;
          }
          .slide {
            page-break-before: always;
            margin-bottom: 40px;
          }
          .slide:first-child {
            page-break-before: auto;
          }
          .slide-number {
            background: #3b82f6;
            color: white;
            padding: 5px 15px;
            border-radius: 20px;
            font-weight: bold;
            display: inline-block;
            margin-bottom: 20px;
          }
          ul, ol {
            margin: 15px 0;
            padding-left: 25px;
          }
          li {
            margin-bottom: 8px;
          }
          .footer {
            text-align: center;
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #e5e7eb;
            color: #6b7280;
            font-size: 14px;
          }
          strong {
            color: #1e40af;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="company-logo">Glodinas Finance B.V.</div>
          <h1>Moneybird Training Manual for Interns</h1>
          <p>A comprehensive guide to mastering Moneybird accounting software</p>
          <p><em>Generated on ${new Date().toLocaleDateString()}</em></p>
        </div>
        
        ${slides.map((slide, index) => `
          <div class="slide">
            <div class="slide-number">Slide ${index + 1}</div>
            ${slide.content}
          </div>
        `).join('')}
        
        <div class="footer">
          <p><strong>Glodinas Finance B.V.</strong></p>
          <p>Professional Financial Services</p>
          <p>📧 info@glodinasfinance.nl | 🌐 glodinasfinance.nl</p>
          <p>© 2025 Glodinas Finance B.V. All rights reserved.</p>
        </div>
      </body>
      </html>
    `;

    return new NextResponse(htmlContent, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Moneybird_Manual_Glodinas_Finance.pdf"',
      },
    });
  } catch (error) {
    console.error('Error generating PDF:', error);
    return NextResponse.json({ error: 'Failed to generate PDF' }, { status: 500 });
  }
}

