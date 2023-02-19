import Link from "next/link";
import { Card, CardGroup } from "react-bootstrap";

export default function MyCards() {
    return (
        <CardGroup>
            <Card className="p-3" >
                <div className="card_container">
                    <div className="cardx">
                        <div className="imgBx">
                            <img src="/solar_image.png" />
                        </div>
                        <div className="contentBx">
                            <h2>PV System</h2>
                            <div className="color">
                                <ul style={{ listStyle: "none" }}>
                                    <hr />
                                    <li>Solar energy products</li>
                                    <li>Solar thermal products.</li>
                                    <li>Fire Detection and Alarm System</li>
                                    <li>Fire Suppression Equipments</li>
                                    <li>CCTV</li>
                                    <li>Home Automation</li>
                                    <li>Access Control</li>
                                </ul>
                            </div>
                            <Link href="/blog/pv_systems">More</Link>
                        </div>
                    </div>
                </div>
            </Card>
            <Card className="p-3">
                <div className="card_container">
                    <div className="cardx">
                        <div className="imgBx">
                            <img src="/home-electrical-wiring.webp" />
                        </div>
                        <div className="contentBx">
                            <h2>Electricals</h2>
                            <div className="color">
                                <ul style={{ listStyle: "none" }}>
                                    <hr />
                                    <li>MATRIX SOLUTIONS provides electrical installation, maintenance and repair services to single family homes, condominiums, multiple family units, and commercial accounts for both new construction or remodelling projects.

                                    </li>
                                </ul>
                            </div>
                            <Link href="/blog/electrical_services">More...</Link>
                        </div>
                    </div>
                </div>
            </Card>
            <Card className="p-3">
                <div className="card_container">
                    <div className="cardx">
                        <div className="imgBx">
                            <img src="/home-electrical-wiring.webp" />
                        </div>
                        <div className="contentBx">
                            <h2>Products</h2>
                            <div className="color">
                                <ul style={{ listStyle: "none" }}>
                                    <hr />
                                    <li>HAVELLS is a big and well established name in field of electricals and also deals in Solar products. Matrix solution is a business partner of the company and can provide the products including installation services for the following category of products.

                                    </li>
                                </ul>
                            </div>
                            <Link href="/blog/havell_products">More...</Link>
                        </div>
                    </div>
                </div>
            </Card>
            <Card className="p-3">
                <div className="card_container">
                    <div className="cardx">
                        <div className="imgBx">
                            <img src="/home-electrical-wiring.webp" />
                        </div>
                        <div className="contentBx">
                            <h2>Policies</h2>
                            <div className="color">
                                <ul style={{ listStyle: "none" }}>
                                    <hr />
                                    <li>Explore our EHS and Quality Policies..</li>
                                </ul>
                            </div>
                            <Link href="/blog/quality_policy">More...</Link>
                        </div>
                    </div>
                </div>
            </Card>

            <Card className="p-3">
                <div className="card_container">
                    <div className="cardx">
                        <div className="imgBx">
                            <img src="/home-electrical-wiring.webp" />
                        </div>
                        <div className="contentBx">
                            <h2>Maintainence</h2>
                            <div className="color">
                                <ul style={{ listStyle: "none" }}>
                                    <hr />
                                    <li>We undertake the maintenance of commercial as well residential building for the following systems as O&M Service or as Preventive Service.</li>
                                </ul>
                            </div>
                            <Link href="/blog/maintainence">More...</Link>
                        </div>
                    </div>
                </div>
            </Card>
        </CardGroup>
    );
}